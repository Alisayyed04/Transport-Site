import Tracking from "../models/Tracking.js";

// Add tracking update
export const addTrackingUpdate = async (req, res) => {
  try {
    const tracking = await Tracking.create(req.body);
    res.status(201).json(tracking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get tracking history
export const getTrackingHistory = async (req, res) => {
  const history = await Tracking.find({
    order: req.params.orderId,
  }).sort({ eventTime: 1 });

  res.json(history);
};
