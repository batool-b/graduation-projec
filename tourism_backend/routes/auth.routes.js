import express from "express";
import {
  register,
  login,
  getMe,
  updateProfile,
  changePassword,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", verifyToken, getMe);              // ← ناقص
router.put("/profile", verifyToken, updateProfile); // ← ناقص
router.put("/change-password", verifyToken, changePassword); // ← ناقص

export default router;