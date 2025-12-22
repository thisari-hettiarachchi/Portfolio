import express from "express";
import {
  getFeedbacks,
  createFeedback,
  getAllFeedbacksAdmin,
  approveFeedback,
  unapproveFeedback,
  deleteFeedback,
} from "../controller/feedbackController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/get", getFeedbacks);
router.post("/add", createFeedback);

// Admin
router.get("/admin/getall", verifyAdmin, getAllFeedbacksAdmin);
router.put("/admin/:id/approve", verifyAdmin, approveFeedback);
router.put("/admin/:id/unapprove", verifyAdmin, unapproveFeedback);
router.delete("/admin/delete/:id", verifyAdmin, deleteFeedback);

export default router;