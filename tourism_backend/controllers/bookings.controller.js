import { prisma } from "../prisma.js";

export const createBooking = async (req, res) => {
  const { trips_id, travel_date, travelers_count, total_price } = req.body;
  const user_id = req.user.id;

  try {
    const booking = await prisma.bookings.create({
      data: {
        user_id,
        trips_id,
        travel_date: new Date(travel_date),
        travelers_count,
        total_price,
        status: "pending",
        created_at: new Date(),
      },
    });
    res.status(201).json({ message: "Booking completed successfully.", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  const user_id = req.user.id;

  try {
    const bookings = await prisma.bookings.findMany({
      where: { user_id },
      orderBy: { id: "desc" },
      include: {
        trips: true,
      },
    });
    res.json(bookings);
  } catch (err) {
    console.error("getMyBookings error:", err);
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};

export const cancelBooking = async (req, res) => {
  const user_id = req.user.id;
  const booking_id = parseInt(req.params.id);

  try {
    const booking = await prisma.bookings.findFirst({
      where: { id: booking_id, user_id },
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({ error: "Booking is already cancelled." });
    }

    const updated = await prisma.bookings.update({
      where: { id: booking_id },
      data: { status: "cancelled" },
    });

    res.json({ message: "Booking cancelled successfully.", booking: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};