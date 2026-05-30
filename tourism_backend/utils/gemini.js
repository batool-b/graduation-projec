import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const MODEL_NAME = process.env.GEMINI_MODEL || "gemini-2.5-flash";
// console.log("Gemini API Key Loaded:", Boolean(apiKey));
const cleanJsonText = (text) =>
  text
    ?.replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

const parseJsonFromText = (text, fallback) => {
  if (!text) return fallback;

  const cleaned = cleanJsonText(text);
  try {
    return JSON.parse(cleaned);
  } catch {
    const jsonMatch = cleaned.match(/(\[[\s\S]*\]|\{[\s\S]*\})/);
    if (!jsonMatch) return fallback;
    try {
      return JSON.parse(jsonMatch[0]);
    } catch {
      return fallback;
    }
  }
};

const getModel = () => {
  if (!genAI) return null;
  return genAI.getGenerativeModel({
    model: MODEL_NAME,
    generationConfig: {
      temperature: 0.45,
      topP: 0.9,
      responseMimeType: "application/json",
    },
  });
};

export const isGeminiConfigured = () => Boolean(genAI);

export const generateRecommendations = async (userProfile, availableTrips) => {
  const model = getModel();
  if (!model) return null;

  const tripsContext = availableTrips.slice(0, 30).map((trip) => ({
    id: trip.id,
    title: trip.title,
    country: trip.country,
    travelType: trip.travelType,
    price: trip.price,
    duration: trip.duration,
    rating: trip.rating,
    hotelStars: trip.hotelStars,
    description: trip.description,
    availableDates: trip.availableDates,
  }));

  const prompt = `You are a professional travel recommendation engine for a tourism booking app.

Return ONLY a valid JSON array. Recommend 3 to 6 trips from Available Trips. Do not invent trip ids.

User Profile:
${JSON.stringify(userProfile, null, 2)}

Available Trips:
${JSON.stringify(tripsContext, null, 2)}

Each item must use this schema:
{
  "tripId": number,
  "score": number from 0 to 100,
  "matchLabel": "Excellent match" | "Strong match" | "Good match",
  "reason": "2 concise sentences explaining the match",
  "bestTimeToBook": "short practical booking advice",
  "highlights": ["3 short highlights"],
  "matchFactors": [{"label": "short factor name", "detail": "specific evidence from the user profile or trip"}],
  "travelerTip": "one helpful tip"
}`;

  const result = await model.generateContent(prompt);
  return parseJsonFromText(result.response.text(), null);
};

export const analyzeUserPreferences = async (userData) => {
  const model = getModel();
  if (!model) {
    return {
      preferredDestinations: [],
      budgetRange: "Not enough data",
      travelStyle: "Flexible",
      preferredDuration: "Flexible",
      seasonalPreference: "Flexible",
    };
  }

  const prompt = `Analyze this user's travel data for a tourism app.
Return ONLY valid JSON with: preferredDestinations, budgetRange, travelStyle, preferredDuration, seasonalPreference, insights.

User data:
${JSON.stringify(userData, null, 2)}`;

  const result = await model.generateContent(prompt);
  return parseJsonFromText(result.response.text(), {
    preferredDestinations: [],
    budgetRange: "Not enough data",
    travelStyle: "Flexible",
    preferredDuration: "Flexible",
    seasonalPreference: "Flexible",
    insights: [],
  });
};

export const generateTripDescription = async (tripData) => {
  const model = getModel();
  if (!model) return null;

  const prompt = `Create polished travel website copy. Return ONLY valid JSON with fields:
headline, description, highlights, bestFor.

Trip Details:
${JSON.stringify(tripData, null, 2)}`;

  const result = await model.generateContent(prompt);
  return parseJsonFromText(result.response.text(), null);
};
