import { prisma } from "../prisma.js";
import {
  analyzeUserPreferences,
  generateRecommendations,
  isGeminiConfigured,
} from "../utils/gemini.js";

const toNumber = (value, fallback = 0) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

const normalizeList = (value) => {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const normalizeTrip = (trip) => {
  const hotelStars = trip.includes
    ?.map((item) => item.hotels?.stars)
    .filter((stars) => Number.isFinite(stars));

  return {
    id: trip.id,
    title: trip.title,
    description: trip.description,
    price: toNumber(trip.price),
    duration: trip.duration,
    rating: trip.rating || 0,
    country: trip.countries?.cname || null,
    countryImage: trip.countries?.cimage || null,
    travelType: trip.travel_types?.tname || null,
    hotelStars: hotelStars?.length ? Math.max(...hotelStars) : null,
    image: trip.trip_images?.[0]?.image_url || null,
    availableDates: trip.trip_dates?.map((date) => date.available_date) || [],
  };
};

const average = (items, selector) => {
  const values = items.map(selector).map((value) => toNumber(value, null)).filter((value) => value !== null);
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
};

const mostFrequent = (items) => {
  const counts = new Map();
  items.filter(Boolean).forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([item]) => item);
};

const keywordStopWords = new Set([
  "trip",
  "tour",
  "travel",
  "getaway",
  "days",
  "day",
  "with",
  "and",
  "the",
  "for",
]);

const activeBookingStatusFilter = {
  notIn: ["cancelled", "canceled"],
};

const extractKeywords = (items) => {
  const text = items
    .map((item) => [item.title, item.description, item.country, item.travelType].filter(Boolean).join(" "))
    .join(" ")
    .toLowerCase();

  return [...new Set(text.match(/[a-z]{4,}/g) || [])]
    .filter((word) => !keywordStopWords.has(word))
    .slice(0, 10);
};

const relatedTravelTypes = {
  Romantic: ["Luxury", "Beach", "City Tour", "Cultural"],
  Luxury: ["Romantic", "Beach", "City Tour"],
  Beach: ["Romantic", "Luxury", "Adventure"],
  Cultural: ["Heritage", "City Tour", "Romantic"],
  Heritage: ["Cultural", "City Tour", "Religious"],
  Adventure: ["Beach", "City Tour", "Cultural"],
  Religious: ["Heritage", "Cultural"],
  Medical: ["Luxury", "City Tour"],
  "City Tour": ["Cultural", "Luxury", "Romantic"],
};

const buildUserProfile = ({ body, userBookings, userReviews }) => {
  const bookedTrips = userBookings.map((booking) => normalizeTrip(booking.trips));
  const reviewedTrips = userReviews.map((review) => normalizeTrip(review.trips));
  const positiveReviewedTrips = userReviews
    .filter((review) => review.rating >= 4)
    .map((review) => normalizeTrip(review.trips));
  const preferenceTrips = [...bookedTrips, ...positiveReviewedTrips];

  const explicit = {
    budget: body.budget !== undefined && body.budget !== "",
    travelType: Boolean(body.travel_type),
    maxDuration: body.max_duration !== undefined && body.max_duration !== "",
    country: Boolean(body.country),
    interests: Boolean(body.interests),
    minRating: body.min_rating !== undefined && body.min_rating !== "",
  };

  const favoriteTravelTypes = mostFrequent(preferenceTrips.map((trip) => trip.travelType));
  const favoriteCountries = mostFrequent(preferenceTrips.map((trip) => trip.country));
  const averageBudget = average(preferenceTrips, (trip) => trip.price);
  const averageDuration = average(preferenceTrips, (trip) => trip.duration);
  const inferredInterests = extractKeywords(preferenceTrips);

  const primaryTravelType = favoriteTravelTypes[0] || "";
  const complementaryTypes = relatedTravelTypes[primaryTravelType] || [];

  return {
    budget: explicit.budget ? toNumber(body.budget, 5000) : Math.ceil((averageBudget || 4000) * 1.35),
    travelType: explicit.travelType ? body.travel_type : "",
    maxDuration: explicit.maxDuration ? toNumber(body.max_duration, 30) : Math.ceil((averageDuration || 14) + 4),
    country: explicit.country ? body.country : "",
    interests: explicit.interests ? normalizeList(body.interests) : inferredInterests,
    previousBookings: userBookings.length,
    previousReviews: userReviews.length,
    minRating: explicit.minRating ? toNumber(body.min_rating, 3) : 3,
    favoriteCountries,
    favoriteTravelTypes,
    complementaryTypes,
    basedOnTrips: bookedTrips.slice(0, 3).map((trip) => ({
      id: trip.id,
      title: trip.title,
      country: trip.country,
      travelType: trip.travelType,
      price: trip.price,
      duration: trip.duration,
    })),
    mode: preferenceTrips.length ? "history-based" : "popular-default",
    explicit,
  };
};

const scoreTrip = (trip, profile, history = {}) => {
  let score = 45;
  const reasons = [];
  const factors = [];
  const interestText = profile.interests.join(" ").toLowerCase();
  const searchable = [
    trip.title,
    trip.description,
    trip.country,
    trip.travelType,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (trip.price <= profile.budget) {
    const budgetFit = 1 - trip.price / Math.max(profile.budget, 1);
    score += Math.min(16, Math.max(4, budgetFit * 16));
    reasons.push(profile.explicit?.budget ? "fits your selected budget" : "fits your usual booking range");
    factors.push({
      label: profile.explicit?.budget ? "Budget match" : "Similar budget",
      detail: `$${trip.price.toLocaleString()} is within the recommendation range of about $${profile.budget.toLocaleString()}.`,
    });
  }

  if (!profile.maxDuration || trip.duration <= profile.maxDuration) {
    score += 10;
    reasons.push(profile.explicit?.maxDuration ? "matches your preferred trip length" : "is close to your usual trip length");
    factors.push({
      label: profile.explicit?.maxDuration ? "Duration match" : "Similar duration",
      detail: `${trip.duration} days fits the trip length learned from your activity.`,
    });
  }

  if (profile.travelType && trip.travelType?.toLowerCase() === profile.travelType.toLowerCase()) {
    score += 18;
    reasons.push(`matches your ${trip.travelType} travel style`);
    factors.push({
      label: "Travel style",
      detail: `You asked for ${trip.travelType} trips.`,
    });
  }

  if (!profile.explicit?.travelType && profile.favoriteTravelTypes?.includes(trip.travelType)) {
    score += 18;
    reasons.push(`matches your past ${trip.travelType} booking style`);
    factors.push({
      label: "Same travel style",
      detail: `You previously booked or liked ${trip.travelType} trips.`,
    });
  }

  if (!profile.explicit?.travelType && profile.complementaryTypes?.includes(trip.travelType)) {
    score += 10;
    reasons.push(`pairs well with your ${profile.favoriteTravelTypes?.[0]} travel style`);
    factors.push({
      label: "Related style",
      detail: `${trip.travelType} is related to your ${profile.favoriteTravelTypes?.[0]} travel pattern.`,
    });
  }

  if (!profile.explicit?.country && profile.favoriteCountries?.includes(trip.country)) {
    score += 12;
    reasons.push(`builds on your interest in ${trip.country}`);
    factors.push({
      label: "Destination match",
      detail: `You have previous activity connected to ${trip.country}.`,
    });
  }

  const matchedInterests = profile.interests.filter((interest) =>
    searchable.includes(interest.toLowerCase())
  );
  if (matchedInterests.length) {
    score += Math.min(18, matchedInterests.length * 7);
    reasons.push(`connects with your interest in ${matchedInterests.slice(0, 2).join(" and ")}`);
    factors.push({
      label: "Interest match",
      detail: `Matches ${matchedInterests.slice(0, 3).join(", ")} from your travel activity.`,
    });
  } else if (interestText && searchable.includes(interestText)) {
    score += 8;
  }

  if (trip.rating >= profile.minRating) {
    score += Math.min(10, trip.rating * 2);
    reasons.push("has a strong rating");
    factors.push({
      label: "Quality signal",
      detail: `${trip.rating}/5 rating meets the recommendation quality threshold.`,
    });
  }

  if (history.countries?.has(trip.country)) score += 4;
  if (history.travelTypes?.has(trip.travelType)) score += 4;
  if (history.reviewedTrips?.has(trip.id)) score -= 20;
  if (history.bookedTrips?.has(trip.id)) score -= 35;

  return {
    score: Math.max(0, Math.min(100, Math.round(score))),
    reasons,
    factors,
  };
};

const buildFallbackRecommendations = (trips, profile, history) =>
  trips
    .map((trip) => {
      const result = scoreTrip(trip, profile, history);
      const highlights = [
        trip.country,
        trip.travelType,
        trip.hotelStars ? `${trip.hotelStars}-star hotel option` : null,
        trip.rating ? `${trip.rating}/5 rating` : null,
      ].filter(Boolean);

      return {
        tripId: trip.id,
        score: result.score,
        matchLabel:
          result.score >= 82 ? "Excellent match" : result.score >= 68 ? "Strong match" : "Good match",
        reason: `This trip ${result.reasons.slice(0, 2).join(" and ") || "matches patterns from your travel activity"}. It offers a strong mix of value, destination appeal, and booking readiness.`,
        bestTimeToBook: trip.availableDates?.length
          ? "Book early to secure one of the available travel dates."
          : "Book when your dates are flexible for the best availability.",
        highlights: highlights.slice(0, 3),
        matchFactors: result.factors.slice(0, 4),
        basedOn: profile.basedOnTrips,
        travelerTip: trip.duration > 7
          ? "Plan a relaxed itinerary so the longer stay feels comfortable."
          : "Keep one free half-day for local exploring.",
        trip,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

const mergeAIRecommendations = (aiRecommendations, trips, fallback) => {
  if (!Array.isArray(aiRecommendations) || aiRecommendations.length === 0) {
    return fallback;
  }

  const byId = new Map(trips.map((trip) => [trip.id, trip]));
  const fallbackById = new Map(fallback.map((item) => [item.tripId, item]));
  const merged = aiRecommendations
    .map((recommendation) => {
      const trip = byId.get(toNumber(recommendation.tripId));
      if (!trip) return null;
      const fallbackItem = fallbackById.get(trip.id);
      return {
        ...recommendation,
        score: Math.max(0, Math.min(100, toNumber(recommendation.score, 70))),
        matchLabel: recommendation.matchLabel || "Strong match",
        highlights: Array.isArray(recommendation.highlights)
          ? recommendation.highlights.slice(0, 3)
          : [],
        matchFactors: Array.isArray(recommendation.matchFactors) && recommendation.matchFactors.length
          ? recommendation.matchFactors.slice(0, 4)
          : fallbackItem?.matchFactors || [],
        basedOn: Array.isArray(recommendation.basedOn) && recommendation.basedOn.length
          ? recommendation.basedOn
          : fallbackItem?.basedOn || [],
        trip,
      };
    })
    .filter(Boolean);

  const usedIds = new Set(merged.map((item) => item.trip.id));
  const fill = fallback.filter((item) => !usedIds.has(item.trip.id));
  return [...merged, ...fill].slice(0, 6);
};

// Traditional recommendations (existing method)
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
        countries: true,
        travel_types: true,
        includes: { include: { hotels: true } },
        uses: { include: { flights: true } },
      },
    });

 
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

// AI-powered recommendations using Gemini
export const getAIRecommendations = async (req, res) => {
  const { budget, travel_type, max_duration, interests, country, min_rating } = req.body;
  const userId = req.user?.id;

  try {
    const allTrips = await prisma.trips.findMany({
      include: {
        trip_images: true,
        trip_dates: true,
        countries: true,
        travel_types: true,
        includes: { include: { hotels: true } },
        uses: { include: { flights: true } },
      },
    });

    const userBookings = await prisma.bookings.findMany({
      where: {
        user_id: userId,
        status: activeBookingStatusFilter,
      },
      include: { trips: { include: { countries: true, travel_types: true } } },
    });

    const userReviews = await prisma.review.findMany({
      where: { user_id: userId },
      include: { trips: { include: { countries: true, travel_types: true } } },
    });

    const userProfile = buildUserProfile({
      body: { budget, travel_type, max_duration, interests, country, min_rating },
      userBookings,
      userReviews,
    });

    const normalizedTrips = allTrips.map(normalizeTrip);
    const filteredTrips = normalizedTrips.filter((trip) => {
      if (userProfile.explicit.budget && trip.price > userProfile.budget) return false;
      if (userProfile.explicit.maxDuration && trip.duration > userProfile.maxDuration) return false;
      if (
        userProfile.explicit.travelType &&
        trip.travelType?.toLowerCase() !== userProfile.travelType.toLowerCase()
      ) {
        return false;
      }
      if (
        userProfile.explicit.country &&
        trip.country?.toLowerCase() !== userProfile.country.toLowerCase()
      ) {
        return false;
      }
      return true;
    });

    const history = {
      bookedTrips: new Set(userBookings.map((booking) => booking.trips_id)),
      reviewedTrips: new Set(userReviews.map((review) => review.trips_id)),
      countries: new Set(userBookings.map((booking) => booking.trips?.countries?.cname).filter(Boolean)),
      travelTypes: new Set(
        userBookings.map((booking) => booking.trips?.travel_types?.tname).filter(Boolean)
      ),
    };
    const unbookedFilteredTrips = filteredTrips.filter((trip) => !history.bookedTrips.has(trip.id));
    const candidateTrips =
      unbookedFilteredTrips.length >= 3
        ? unbookedFilteredTrips
        : filteredTrips.length
          ? filteredTrips
          : normalizedTrips.filter((trip) => !history.bookedTrips.has(trip.id));

    const fallbackRecommendations = buildFallbackRecommendations(candidateTrips, userProfile, history);
    let aiRecommendations = null;
    let aiStatus = isGeminiConfigured() ? "gemini" : "smart-fallback";

    if (isGeminiConfigured()) {
      try {
        aiRecommendations = await generateRecommendations(userProfile, candidateTrips);
      } catch (error) {
        console.error("Gemini Recommendation Error:", error.message);
        aiStatus = "smart-fallback";
      }
    }

    const recommendations = mergeAIRecommendations(
      aiRecommendations,
      candidateTrips,
      fallbackRecommendations
    );

    res.json({
      message: "Personalized trip recommendations",
      userProfile,
      recommendations,
      source: aiStatus,
      totalTripsAnalyzed: candidateTrips.length,
      filtersMatched: filteredTrips.length,
    });
  } catch (err) {
    console.error("AI Recommendation Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Analyze user preferences using AI
export const getUserPreferences = async (req, res) => {
  const { user_id } = req.params;
cnsole.log("Analyzing preferences for user ID:", user_id);
  try {
    const user = await prisma.users.findUnique({
      where: { id: parseInt(user_id) },
      include: {
        bookings: {
          where: { status: activeBookingStatusFilter },
          include: { trips: { include: { countries: true, travel_types: true } } },
        },
        review: { include: { trips: { include: { countries: true, travel_types: true } } } },
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
console.log("User data retrieved for preference analysis:", {
  bookings: user.bookings.length,
  reviews: user.review.length,
});
    const userData = {
      bookings: user.bookings.map((b) => ({
        tripName: b.trips.title,
        destination: b.trips.countries?.cname,
        travelType: b.trips.travel_types?.tname,
        price: toNumber(b.trips.price),
        date: b.travel_date,
      })),
      reviews: user.review.map((r) => ({
        tripName: r.trips.title,
        rating: r.rating,
        comment: r.comment,
      })),
      browsingHistory: [],
    };

    const preferences = await analyzeUserPreferences(userData);
    console.log("Analyzed User Preferences:", preferences);
    res.json({
      message: "User travel preferences analyzed",
      preferences,
    });
  } catch (err) {
    console.error("Preference Analysis Error:", err);
    res.status(500).json({ error: err.message });
  }
};
