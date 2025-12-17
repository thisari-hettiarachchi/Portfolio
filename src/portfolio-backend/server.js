const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://portfolioUser:Thisari2101@cluster0.jbobse8.mongodb.net/portfolioDB"
)

.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  title: String,
  feedback: String,
  image: { type: String, default: "https://i.pravatar.cc/150?img=12" },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Routes
// Get all feedbacks
app.get("/feedbacks", async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
});

// Add a new feedback
app.post("/feedbacks", async (req, res) => {
  const newFeedback = new Feedback(req.body);
  await newFeedback.save();
  res.json(newFeedback);
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
