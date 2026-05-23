import { prisma } from "../prisma.js";

export const createReview = async (req, res) => {
  const { trips_id, rating, comment } = req.body;
  const user_id = req.user.id;

  try {
    const review = await prisma.review.create({
      data: {
        user_id,
        trips_id,
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