import Order from "../models/Order.js";

// Create Order (Booking)
export const createOrder = async (req, res) => {
  try {
    const data = req.body;

    // Simple tracking ID generator
    const trackingId = "PKR" + Math.floor(100000 + Math.random() * 900000);

    const order = await Order.create({
      ...data,
      trackingId,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Orders (Admin)
export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user");
  res.json(orders);
};

// Get by Tracking ID (Customer tracking)
export const getOrderByTrackingId = async (req, res) => {
  const order = await Order.findOne({
    trackingId: req.params.trackingId,
  });

  if (!order) return res.status(404).json({ message: "Order not found" });

  res.json(order);
};

// Update Status (Admin)
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  order.status = status;

  if (status === "delivered") order.deliveredAt = new Date();

  await order.save();

  res.json(order);
};
