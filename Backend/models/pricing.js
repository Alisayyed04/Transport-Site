import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
  baseRate: Number, // base price

  perKgRate: Number,

  perKmRate: Number,

  parcelTypes: [
    {
      type: String,
      multiplier: Number,
    },
  ],
});

export default mongoose.model("Pricing", pricingSchema);
