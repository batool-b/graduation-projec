import express from "express";
import { createBooking, getMyBookings, cancelBooking } from "../controllers/bookings.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createBooking);
router.get("/my", verifyToken, getMyBookings);
router.put("/:id/cancel", verifyToken, cancelBooking); 

export default router;