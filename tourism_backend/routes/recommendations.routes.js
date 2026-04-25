import express from "express";
import { getRecommendations } from "../controllers/recommendations.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, getRecommendations);

export default router;