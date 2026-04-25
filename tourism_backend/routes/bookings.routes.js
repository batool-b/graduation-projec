import express from "express";
import { createBooking, getMyBookings } from "../controllers/bookings.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createBooking);
router.get("/my", verifyToken, getMyBookings);

export default router;