import express from "express";
import {
  getFeedbacks,
  createFeedback,
  getAllFeedbacksAdmin,
  approveFeedback,
  deleteFeedback,
} from "../controller/feedbackController.js"; 
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/get", getFeedbacks);
router.post("/add", createFeedback);

router.get("/admin/getall", verifyAdmin, getAllFeedbacksAdmin);
router.put("/admin/:id/approve", verifyAdmin, approveFeedback);
router.delete("/admin/delete/:id", verifyAdmin, deleteFeedback);

export default router;
