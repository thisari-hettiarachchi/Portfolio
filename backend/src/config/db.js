import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  // Reuse existing connection in serverless
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
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
