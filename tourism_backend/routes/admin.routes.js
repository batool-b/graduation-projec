import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import {
  getOverview,
  getAllUsers, getUserById, createUser, updateUser, deleteUser,
  getAllTrips, createTrip, updateTrip, deleteTrip,
  getAllBookings, updateBookingStatus, deleteBooking,
} from "../controllers/admin.controller.js";

const router = express.Router();

// middleware — كل الـ routes تحتاج admin
const verifyAdmin = (req, res, next) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ error: "Admin access required." });
  next();
};

router.use(verifyToken, verifyAdmin);

// Overview
router.get("/overview", getOverview);

// Users
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// Trips
router.get("/trips", getAllTrips);
router.post("/trips", createTrip);
router.put("/trips/:id", updateTrip);
router.delete("/trips/:id", deleteTrip);

// Bookings
router.get("/bookings", getAllBookings);
router.put("/bookings/:id/status", updateBookingStatus);
router.delete("/bookings/:id", deleteBooking);

export default router;