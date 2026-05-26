import { prisma } from "../prisma.js";

// إضافة تقييم
export const createReview = async (req, res) => {
  const { trips_id, rating, comment } = req.body;
  const user_id = req.user.id;

  try {
    // تحقق إن اليوزر حجز هاي الرحلة فعلاً
    const booking = await prisma.bookings.findFirst({
      where: {
        user_id,
        trips_id: parseInt(trips_id),
      },
    });

    if (!booking) {
      return res.status(403).json({ error: "You can only review trips you have booked." });
    }

    // تحقق إن اليوزر ما عمل ريفيو مسبقاً على نفس الرحلة
    const existing = await prisma.review.findFirst({
      where: { user_id, trips_id: parseInt(trips_id) },
    });

    if (existing) {
      return res.status(400).json({ error: "You have already reviewed this trip." });
    }

    const review = await prisma.review.create({
      data: {
        user_id,
        trips_id: parseInt(trips_id),
        rating,
        comment,
        created_at: new Date(),
      },
    });
    res.status(201).json({ message: "Review added successfully.", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// جلب تقييمات رحلة
export const getTripReviews = async (req, res) => {
  const trips_id = parseInt(req.params.id);

  try {
    const reviews = await prisma.review.findMany({
      where: { trips_id },
      include: { users: true },
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};