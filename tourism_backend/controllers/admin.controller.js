import { prisma } from "../prisma.js";
import bcrypt from "bcrypt";

// ====================== OVERVIEW ======================
export const getOverview = async (req, res) => {
  try {
    const [usersCount, tripsCount, bookingsCount, revenueData] = await Promise.all([
      prisma.users.count(),
      prisma.trips.count(),
      prisma.bookings.count(),
      prisma.payments.aggregate({ _sum: { amount: true } }),
    ]);

    res.json({
      users: usersCount,
      trips: tripsCount,
      bookings: bookingsCount,
      revenue: revenueData._sum.amount || 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ====================== USERS ======================
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        profile_image: true,
        created_at: true,
        _count: { select: { bookings: true } },
      },
      orderBy: { created_at: "desc" },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        profile_image: true,
        created_at: true,
        bookings: {
          include: { trips: true },
          orderBy: { created_at: "desc" },
        },
      },
    });
    if (!user) return res.status(404).json({ error: "User not found." });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;
  if (!first_name || !last_name || !email || !phone || !password)
    return res.status(400).json({ error: "All fields are required." });

  try {
    const existing = await prisma.users.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: "Email already in use." });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({
      data: { first_name, last_name, email, phone, password: hashed, created_at: new Date() },
    });
    res.status(201).json({ message: "User created successfully.", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  try {
    const user = await prisma.users.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(first_name && { first_name }),
        ...(last_name && { last_name }),
        ...(email && { email }),
        ...(phone && { phone }),
      },
    });
    res.json({ message: "User updated successfully.", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await prisma.users.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ====================== TRIPS ======================
export const getAllTrips = async (req, res) => {
  try {
    const trips = await prisma.trips.findMany({
      include: {
        trip_images: true,
        trip_dates: true,
        countries: true,
        travel_types: true,
      },
      orderBy: { id: "desc" },
    });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTrip = async (req, res) => {
  const { title, description, price, duration, countries_id, travel_types_id } = req.body;
  if (!title || !price || !countries_id || !travel_types_id)
    return res.status(400).json({ error: "Required fields missing." });

  try {
    const trip = await prisma.trips.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        duration: parseInt(duration),
        countries_id: parseInt(countries_id),
        travel_types_id: parseInt(travel_types_id),
      },
    });
    res.status(201).json({ message: "Trip created successfully.", trip });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTrip = async (req, res) => {
  const { title, description, price, duration, countries_id, travel_types_id } = req.body;
  try {
    const trip = await prisma.trips.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(price && { price: parseFloat(price) }),
        ...(duration && { duration: parseInt(duration) }),
        ...(countries_id && { countries_id: parseInt(countries_id) }),
        ...(travel_types_id && { travel_types_id: parseInt(travel_types_id) }),
      },
    });
    res.json({ message: "Trip updated successfully.", trip });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTrip = async (req, res) => {
  try {
    await prisma.trips.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: "Trip deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ====================== BOOKINGS ======================
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await prisma.bookings.findMany({
      include: {
        users: { select: { id: true, first_name: true, last_name: true, email: true } },
        trips: { select: { id: true, title: true, price: true } },
      },
      orderBy: { created_at: "desc" },
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  const { status } = req.body;
  const allowed = ["pending", "confirmed", "cancelled", "completed"];
  if (!allowed.includes(status))
    return res.status(400).json({ error: "Invalid status." });

  try {
    const booking = await prisma.bookings.update({
      where: { id: parseInt(req.params.id) },
      data: { status },
    });
    res.json({ message: "Booking status updated.", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    await prisma.bookings.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: "Booking deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};