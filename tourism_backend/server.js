import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { prisma } from "./prisma.js";
import authRoutes from "./routes/auth.routes.js";
import tripsRoutes from "./routes/trips.routes.js";
import recommendationsRoutes from "./routes/recommendations.routes.js";
import bookingsRoutes from "./routes/bookings.routes.js";
import reviewsRoutes from "./routes/reviews.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import countriesRoutes from "./routes/countries.routes.js";
import travelTypesRoutes from "./routes/travelTypes.routes.js";
import paymentsRoutes from "./routes/payments.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const rateLimitStore = new Map();

const rateLimit = ({ windowMs = 15 * 60 * 1000, max = 150 } = {}) => {
  return (req, res, next) => {
    const key = req.ip || req.headers["x-forwarded-for"] || "unknown";
    const now = Date.now();
    const current = rateLimitStore.get(key);

    if (!current || current.resetAt <= now) {
      rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    current.count += 1;
    if (current.count > max) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
      });
    }

    return next();
  };
};

// ====================== MIDDLEWARE ======================
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));
app.use(express.json());
app.use("/api", rateLimit());

// ====================== STATIC FILES ======================
app.use("/images", express.static(path.join(__dirname, "../tourism-app/public/images")));

// ====================== ROUTES ======================
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripsRoutes);
app.use("/api/recommendations", recommendationsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/travel-types", travelTypesRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/admin", adminRoutes);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
