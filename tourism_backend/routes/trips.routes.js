import express from "express";
import { getTrips, getTripById } from "../controllers/trips.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, getTrips);
router.get("/:id", verifyToken, getTripById);

export default router;