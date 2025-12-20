import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";

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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;