import { prisma } from "../prisma.js";

// POST /api/contact
export const createMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = await prisma.contact_messages.create({
      data: {
        message_name: name,   // اسم الحقل بالـ schema هو message_name
        email,
        subject,
        message,              // تأكد إنك أضفت هذا الحقل بالـ schema (خطوة لازمة - راجع الملاحظة)
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

// GET /api/contact  (admin only — اختياري)
export const getMessages = async (req, res) => {
  try {
    const messages = await prisma.contact_messages.findMany({
      orderBy: { created_at: "desc" },
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};