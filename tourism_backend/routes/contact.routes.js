import express from "express";
import { createMessage } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", createMessage);

export default router;