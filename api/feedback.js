import mongoose from "mongoose";

// ---------- SCHEMA ----------
const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
});

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

// ---------- DB CONNECTION ----------
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

// ---------- API HANDLER ----------
export default async function handler(req, res) {
  await connectDB();

  // GET feedbacks
  if (req.method === "GET") {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return res.status(200).json(feedbacks);
  }

  // POST feedback
  if (req.method === "POST") {
    const { name, role, message, rating } = req.body;

    if (!name || !role || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const feedback = new Feedback({
      name,
      role,
      message,
      rating,
    });

    await feedback.save();
    return res.status(201).json(feedback);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
