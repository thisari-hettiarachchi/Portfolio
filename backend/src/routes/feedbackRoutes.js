import express from "express";
import {
  getFeedbacks,
  createFeedback,
  getAllFeedbacksAdmin,
  approveFeedback,
  deleteFeedback,
} from "../controller/feedbackController.js"; 

const router = express.Router();

// Public
router.get("/get", getFeedbacks);
router.post("/add", createFeedback);

// Admin routes (add auth middleware if you have one)
router.get("/admin/feedbacks", getAllFeedbacksAdmin);
router.put("/admin/feedbacks/:id/approve", approveFeedback);
router.delete("/admin/feedbacks/:id", deleteFeedback);

export default router;
