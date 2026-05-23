import { prisma } from "../prisma.js";

export const createPayment = async (req, res) => {
  const user_id = req.user.id;
  const { booking_id, amount, payment_method } = req.body;

  try {
    const booking = await prisma.bookings.findFirst({
      where: { id: booking_id, user_id },
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    if (booking.status === "confirmed") {
      return res.status(400).json({ error: "Booking already paid." });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({ error: "Cannot pay for a cancelled booking." });
    }

    const payment = await prisma.payments.create({
      data: {
        bookings_id: booking_id,      
        amount,
        payment_method,
        payment_status: "completed",  
        created_at: new Date(),       
      },
    });

    await prisma.bookings.update({
      where: { id: booking_id },
      data: { status: "confirmed" },
    });

    res.status(201).json({ message: "Payment successful.", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};