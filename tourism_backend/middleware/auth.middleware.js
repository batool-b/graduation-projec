import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // ✅ التعديل: حول الـ id لـ Int دايماً لأن JWT بيحوله لـ String
    req.user = {
      ...decoded,
      id: parseInt(decoded.id),
    };
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token." });
  }
};