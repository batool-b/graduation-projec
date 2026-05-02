import express from "express";
import { getTravelTypes } from "../controllers/countries.controller.js";

const router = express.Router();

router.get("/", getTravelTypes);

export default router;