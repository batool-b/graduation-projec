import { prisma } from "../prisma.js";

export const createMessage = async (req, res) => {
  const { message_name, email, subject } = req.body;

  try {
    const message = await prisma.contact_messages.create({
      data: {
        message_name,
        email,
        subject,
        created_at: new Date(),
      },
    });
    res.status(201).json({ message: "Message sent successfully", data: message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};