import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    process.env.CLIENT_URL,
    process.env.DEPLOYED_CLIENT_URL,
    process.env.ADMIN_URL,
    process.env.DEPLOYED_ADMIN_URL,
  ].filter(Boolean),
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Feedback routes
app.use("/api/feedbacks", feedbackRoutes);

app.use("/api/admin", adminRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});


export default app;