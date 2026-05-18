import { prisma } from "../prisma.js";

export const getTrips = async (req, res) => {
  const { price_min, price_max, country, travel_type, date } = req.query;
  try {
    const trips = await prisma.trips.findMany({
      where: {
        ...(price_min && { price: { gte: parseFloat(price_min) } }),
        ...(price_max && { price: { lte: parseFloat(price_max) } }),
        ...(country && { countries_id: parseInt(country) }),
        ...(travel_type && { travel_types_id: parseInt(travel_type) }),
        ...(date && {
          trip_dates: { some: { available_date: new Date(date) } },
        }),
      },
      include: {
        trip_images: true,
        trip_dates: true,
        includes: { include: { hotels: true } },
        uses: { include: { flights: true } },
      },
    });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTripById = async (req, res) => {
  try {
    const trip = await prisma.trips.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        trip_images: true,
        trip_dates: true,
        includes: { include: { hotels: true } },
        uses: { include: { flights: true } },
        review: {
          include: {
            users: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                profile_image: true,
              },
            },
          },
        },
      },
    });
    if (!trip) return res.status(404).json({ error: "The trip is not available." });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};