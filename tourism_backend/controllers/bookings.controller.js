import { prisma } from "../prisma.js";

// إنشاء حجز جديد
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

// جلب حجوزات المستخدم
export const getMyBookings = async (req, res) => {
  const user_id = req.user.id;

  try {
    const bookings = await prisma.bookings.findMany({
      where: { user_id },
      include: {
        trips: {
          include: { trip_images: true },
        },
      },
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};