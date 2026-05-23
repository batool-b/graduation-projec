import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma.js";

export const register = async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  if (!first_name || !last_name || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const existingUser = await prisma.users.findUnique({ where: { email } });
    const existingAdmin = await prisma.admins.findUnique({ where: { email } });

    if (existingUser || existingAdmin) {
      return res.status(400).json({ error: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        password: hashedPassword,
        created_at: new Date(),
      },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Account created successfully.",
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        profile_image: user.profile_image || null,
        is_admin: false,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const admin = await prisma.admins.findUnique({ where: { email } });
    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password." });
      }

      const token = jwt.sign(
        { id: admin.id, email: admin.email, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.json({
        token,
        user: {
          id: admin.id,
          first_name: admin.first_name,
          last_name: admin.last_name,
          email: admin.email,
          phone: admin.phone,
          profile_image: admin.profile_image || null,
          is_admin: true,
        },
      });
    }

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        profile_image: user.profile_image || null,
        is_admin: false,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMe = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      const admin = await prisma.admins.findUnique({
        where: { id: req.user.id },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          profile_image: true,
          created_at: true,
        },
      });
      if (!admin) return res.status(404).json({ error: "Admin not found." });

      return res.json({ ...admin, is_admin: true });
    }

    const user = await prisma.users.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        profile_image: true,
        created_at: true,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found." });

    return res.json({ ...user, is_admin: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req, res) => {
  const { first_name, last_name, phone, profile_image } = req.body;
  const updateData = {
    ...(first_name && { first_name }),
    ...(last_name && { last_name }),
    ...(phone && { phone }),
    ...(profile_image !== undefined && { profile_image }),
  };

  try {
    if (req.user.role === "admin") {
      const updated = await prisma.admins.update({
        where: { id: req.user.id },
        data: updateData,
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          profile_image: true,
        },
      });
      return res.json({
        message: "Profile updated successfully.",
        user: { ...updated, is_admin: true },
      });
    }

    const updated = await prisma.users.update({
      where: { id: req.user.id },
      data: updateData,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        profile_image: true,
      },
    });
    return res.json({
      message: "Profile updated successfully.",
      user: { ...updated, is_admin: false },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const changePassword = async (req, res) => {
  const { current_password, new_password } = req.body;

  if (!current_password || !new_password) {
    return res.status(400).json({ error: "Both fields are required." });
  }
  if (new_password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }

  try {
    const table = req.user.role === "admin" ? prisma.admins : prisma.users;
    const record = await table.findUnique({ where: { id: req.user.id } });

    const isMatch = await bcrypt.compare(current_password, record.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Current password is incorrect." });
    }

    const hashed = await bcrypt.hash(new_password, 10);
    await table.update({ where: { id: req.user.id }, data: { password: hashed } });

    res.json({ message: "Password changed successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};