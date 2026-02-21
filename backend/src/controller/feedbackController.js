import Feedback from "../models/Feedback.js";

// GET all approved feedbacks for public
export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ approved: true }).sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("❌ Error fetching feedbacks:", error);
    res.status(500).json({ error: "Failed to fetch feedbacks", details: error.message });
  }
};

// POST new feedback
export const createFeedback = async (req, res) => {
  try {
    const { name, role, message, rating } = req.body;
    if (!name || !role || !message || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const feedback = new Feedback({ name, role, message, rating });
    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error("❌ Error creating feedback:", error);
    res.status(500).json({ error: "Failed to submit feedback", details: error.message });
  }
};

// Admin: GET all feedbacks
export const getAllFeedbacksAdmin = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("❌ Error fetching all feedbacks (admin):", error);
    res.status(500).json({ error: "Failed to fetch feedbacks", details: error.message });
  }
};

// Admin: Approve feedback
export const approveFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndUpdate(id, { approved: true }, { new: true });
    if (!feedback) return res.status(404).json({ error: "Feedback not found" });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Failed to approve feedback" });
  }
};

// Admin: Unapprove feedback
export const unapproveFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndUpdate(id, { approved: false }, { new: true });
    if (!feedback) return res.status(404).json({ error: "Feedback not found" });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Failed to unapprove feedback" });
  }
};

// Admin: Delete feedback
export const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndDelete(id);
    if (!feedback) return res.status(404).json({ error: "Feedback not found" });
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
};
