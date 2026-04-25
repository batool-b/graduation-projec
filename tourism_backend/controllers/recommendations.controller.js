import { prisma } from "../prisma.js";

export const getRecommendations = async (req, res) => {
  const { budget, travel_type, max_duration } = req.query;

  try {
    const trips = await prisma.trips.findMany({
      where: {
        ...(budget && { price: { lte: parseFloat(budget) } }),
        ...(travel_type && { travel_types_id: parseInt(travel_type) }),
        ...(max_duration && { duration: { lte: parseInt(max_duration) } }),
      },
      include: {
        trip_images: true,
        trip_dates: true,
        includes: { include: { hotels: true } },
        uses: { include: { flights: true } },
      },
    });

    // رتّب الرحلات: الأقرب للميزانية أولاً
    const sorted = trips.sort((a, b) => {
      const budgetNum = parseFloat(budget) || 999999;
      const diffA = Math.abs(parseFloat(a.price) - budgetNum);
      const diffB = Math.abs(parseFloat(b.price) - budgetNum);
      return diffA - diffB;
    });

    res.json({
      message: "Recommended trips for you.",
      count: sorted.length,
      trips: sorted,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};