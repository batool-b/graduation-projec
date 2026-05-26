import { prisma } from "../prisma.js";

// إنشاء حجز جديد
export const createBooking = async (req, res) => {
  const { trips_id, travel_date, travelers_count, total_price } = req.body;
  const user_id = req.user.id;

  try {
    // ✅ تحقق إن التاريخ مش في الماضي
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const bookingDate = new Date(travel_date);

    if (bookingDate < today) {
      return res.status(400).json({ error: "Cannot book a past date." });
    }

    // ✅ تحقق إن هاد التاريخ موجود فعلاً في trip_dates لهاي الرحلة
    const validDate = await prisma.trip_dates.findFirst({
      where: {
        trips_id: parseInt(trips_id),
        available_date: bookingDate,
      },
    });

    if (!validDate) {
      return res.status(400).json({ error: "Selected date is not available for this trip." });
    }

    const booking = await prisma.bookings.create({
      data: {
        user_id,
        trips_id,
        travel_date: bookingDate,
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
      orderBy: { id: "desc" },
      include: { trips: true },
    });

    const now = new Date();

    // حجوزات منتهية = travel_date + duration أقل من اليوم + status مش cancelled
    const toComplete = bookings
      .filter((b) => {
        if (b.status === "cancelled" || b.status === "completed") return false;
        const endDate = new Date(b.travel_date);
        endDate.setDate(endDate.getDate() + (b.trips?.duration || 0));
        return endDate < now;
      })
      .map((b) => b.id);

    // اعمل bulk update للمنتهية
    if (toComplete.length > 0) {
      await prisma.bookings.updateMany({
        where: { id: { in: toComplete } },
        data: { status: "completed" },
      });
    }

    // أعد الداتا مع الـ status المحدث
    const updated = bookings.map((b) => ({
      ...b,
      status: toComplete.includes(b.id) ? "completed" : b.status,
    }));

    res.json(updated);
  } catch (err) {
    console.error("getMyBookings error:", err);
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};

// إلغاء حجز
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