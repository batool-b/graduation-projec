import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma.js";

// Register
export const register = async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  try {
    // تحقق إذا الإيميل موجود
    const existing = await prisma.users.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "Email is already in use."});
    }

    // تشفير الباسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // إنشاء المستخدم
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

    res.status(201).json({ message: "Account created successfully.", userId: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // البحث عن المستخدم
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // التحقق من الباسورد
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    // إنشاء الـ token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user: { id: user.id, first_name: user.first_name, email: user.email,is_admin: true} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};