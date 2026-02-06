import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Allowed origins for frontend
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.CLIENT_URL,
  process.env.DEPLOYED_CLIENT_URL,
  "https://thisari-hettiarachchi.vercel.app", // Your deployed frontend
].filter(Boolean);

console.log("Allowed origins:", allowedOrigins);

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    console.log("Request from origin:", origin);
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("CORS blocked origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("API is running..."));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedbacks", feedbackRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app;
