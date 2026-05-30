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

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  try {
    await prisma.$executeRaw`
      INSERT INTO contact_messages (message_name, email, subject, message, created_at)
      VALUES (${name}, ${email}, ${subject}, ${message}, NOW())
    `;

    const [contact] = await prisma.$queryRaw`
      SELECT id, message_name, email, subject, message, created_at
      FROM contact_messages
      WHERE id = LAST_INSERT_ID()
    `;

    res.status(201).json({
      message: "Message sent successfully.",
      contact,
    });
  } catch (err) {
    console.error("createMessage error:", err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
};

// GET /api/contact
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
