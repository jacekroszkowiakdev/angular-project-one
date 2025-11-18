import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// Allow cross-origin requests (Angular dev server → backend)
app.use(
  cors({
    origin: "http://localhost:4200", // Angular dev server
    credentials: false,
  })
);

app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Auth server running at http://localhost:${PORT}`);
});
