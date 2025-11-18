import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import type { JwtPayload } from "../types/index.js";
import {
  authMiddleware,
  type AuthenticatedRequest,
} from "../middleware/auth.js";

const router = Router();

/**
 * Fake user for demo purposes.
 */
const FAKE_USER = {
  id: 1,
  email: "admin@example.com",
  passwordHash: bcrypt.hashSync("password123", 10),
};

/**
 * POST /auth/login
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required." });
  }

  if (email !== FAKE_USER.email) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  const valid = await bcrypt.compare(password, FAKE_USER.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  const payload: JwtPayload = {
    userId: FAKE_USER.id,
    email: FAKE_USER.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET ?? "dev-secret", {
    expiresIn: "1h",
  });

  return res.json({ token });
});

/**
 * GET /auth/me
 * Returns current user info based on JWT.
 */
router.get("/me", authMiddleware, (req: AuthenticatedRequest, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated." });
  }

  return res.json({
    id: req.user.userId,
    email: req.user.email,
  });
});

export default router;
