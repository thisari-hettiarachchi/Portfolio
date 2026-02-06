import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  // Reuse existing connection in serverless
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    // Support both local .env (MONGO_URI) and Vercel/Mongo Atlas default (MONGODB_URI)
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("Mongo connection string is missing (set MONGO_URI or MONGODB_URI)");
    }

    const db = await mongoose.connect(mongoUri, {
      bufferCommands: false,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
    // Don't exit process in serverless environment
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
    throw error;
  }
};

export default connectDB;
