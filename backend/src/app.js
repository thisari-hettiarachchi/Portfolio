import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Allowed origins for frontend
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  process.env.DEPLOYED_CLIENT_URL || "https://thisari-hettiarachchi.vercel.app"
];

// CORS middleware
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

// Handle preflight requests for all routes
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
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
