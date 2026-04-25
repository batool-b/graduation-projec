import express from "express";
import { createReview, getTripReviews } from "../controllers/reviews.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/trip/:id", getTripReviews);

export default router;