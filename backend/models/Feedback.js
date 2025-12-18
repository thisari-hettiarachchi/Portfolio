const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, default: 5 },
  image: { type: String }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
