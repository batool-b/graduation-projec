import "dotenv/config";
import express from "express";
import { prisma } from "./prisma.js";
import authRoutes from "./routes/auth.routes.js";
import tripsRoutes from "./routes/trips.routes.js";
import recommendationsRoutes from "./routes/recommendations.routes.js";
import bookingsRoutes from "./routes/bookings.routes.js";
import reviewsRoutes from "./routes/reviews.routes.js";
import contactRoutes from "./routes/contact.routes.js";
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripsRoutes);
app.use("/api/recommendations", recommendationsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/contact", contactRoutes);
// ====================== USERS ======================
app.get("/users", async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { first_name, last_name, email, phone, password, profile_image } = req.body;
  try {
    const user = await prisma.users.create({
      data: { first_name, last_name, email, phone, password, profile_image }
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const user = await prisma.users.update({ where: { id }, data });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.users.delete({ where: { id } });
  res.json({ message: "User deleted" });
});

// ====================== TRIPS ======================
app.get("/trips", async (req, res) => {
  const trips = await prisma.trips.findMany({
    include: {
      trip_images: true,
      trip_dates: true,
      includes: { include: { hotels: true } },
      uses: { include: { flights: true } },
      countries: true,
      travel_types: true
    }
  });
  res.json(trips);
});

app.get("/trips/:id", async (req, res) => {
  const trip = await prisma.trips.findUnique({
    where: { id: parseInt(req.params.id) },
    include: {
      trip_images: true,
      trip_dates: true,
      includes: { include: { hotels: true } },
      uses: { include: { flights: true } },
      review: { include: { users: true } },
      countries: true,
      travel_types: true
    }
  });
  res.json(trip || { error: "Trip not found" });
});

app.post("/trips", async (req, res) => {
  const { title, description, price, duration, rating, countries_id, travel_types_id } = req.body;
  const trip = await prisma.trips.create({
    data: { title, description, price, duration, rating, countries_id, travel_types_id }
  });
  res.status(201).json(trip);
});

// باقي الـ trips (put, delete) مشابه للنسخة القديمة...

// ====================== BOOKINGS ======================
app.post("/bookings", async (req, res) => {
  const { user_id, trips_id, travel_date, travelers_count, total_price, status = "pending" } = req.body;
  const booking = await prisma.bookings.create({
    data: {
      user_id,
      trips_id,
      travel_date: new Date(travel_date),
      travelers_count,
      total_price,
      status
    }
  });
  res.status(201).json(booking);
});

// ====================== REVIEWS ======================
app.post("/reviews", async (req, res) => {
  const { user_id, trips_id, rating, comment } = req.body;
  const review = await prisma.review.create({
    data: { user_id, trips_id, rating, comment }
  });
  res.status(201).json(review);
});

// ====================== CONTACT MESSAGES ======================
app.post("/contact-messages", async (req, res) => {
  const { message_name, email, subject } = req.body;
  const message = await prisma.contact_messages.create({
    data: { message_name, email, subject }
  });
  res.status(201).json(message);
});

// يمكنك إضافة نفس النمط لباقي الجداول (countries, hotels, flights, ...)

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});