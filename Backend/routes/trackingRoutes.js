import express from "express";
import {
  addTrackingUpdate,
  getTrackingHistory,
} from "../controllers/trackingController.js";

const router = express.Router();

// Admin adds updates
router.post("/", addTrackingUpdate);

// Customer views timeline
router.get("/:orderId", getTrackingHistory);

export default router;
