import express from "express";
import { createPayment } from "../controllers/payments.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createPayment);

export default router;