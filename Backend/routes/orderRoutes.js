import express from "express";
import {
  createOrder,
  getOrders,
  getOrderByTrackingId,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// Customer
router.post("/", createOrder);
router.get("/", getOrders);

// Tracking
router.get("/:trackingId", getOrderByTrackingId);

// Admin
router.put("/:id/status", updateOrderStatus);

export default router;
