import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Allowed origins for frontend
const allowedOrigins = [
  process.env.CLIENT_URL,          // localhost frontend
  process.env.DEPLOYED_CLIENT_URL, // deployed frontend
].filter(Boolean);

// CORS middleware
app.use(cors({
  origin: allowedOrigins,
  credentials: true, // needed for admin login cookies/auth headers
}));

app.use(express.json());

// Test route
app.route('*').get((req, res) => res.send("API is running..."));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedbacks", feedbackRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app;
