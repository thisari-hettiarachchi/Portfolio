import dotenv from "dotenv";
dotenv.config(); 

import connectDB from "./src/config/db.js";
import app from "./src/app.js";

// Initialize database connection for all requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection failed" });
  }
});

// For Vercel serverless deployment
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }).catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
}
