import express from "express";
import {
  getRecommendations,
  getAIRecommendations,
  getUserPreferences,
} from "../controllers/recommendations.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Traditional filter-based recommendations
router.get("/", verifyToken, getRecommendations);

// AI-powered personalized recommendations using Gemini
router.post("/ai", verifyToken, getAIRecommendations);

// Analyze user travel preferences with AI
router.get("/preferences/:user_id", verifyToken, getUserPreferences);

export default router;