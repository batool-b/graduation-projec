import { prisma } from "../prisma.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// POST /api/contact
export const createMessage = async (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const subject = req.body.subject?.trim();
  const message = req.body.message?.trim();

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = await prisma.contact_messages.create({
      data: {
        message_name: name,
        email,
        subject,
        message,
        created_at: new Date(),
      },
    });

    res.status(201).json({
      message: "Message sent successfully.",
      contact,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/contact (admin only)
export const getMessages = async (req, res) => {
  try {
    const messages = await prisma.$queryRaw`
      SELECT id, message_name, email, subject, message, created_at
      FROM contact_messages
      ORDER BY created_at DESC
    `;

    res.json(messages);
  } catch (err) {
    console.error("getMessages error:", err);
    res.status(500).json({ error: "Failed to load messages." });
  }
};