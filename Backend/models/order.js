import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    trackingId: {
      type: String,
      unique: true,
      index: true,
    },

    //Link to User (if logged in)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    //Customer Info
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    contactNumber: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Enter valid Indian phone number"],
    },

    //Parcel Details
    parcelType: {
      type: String,
      required: true,
      enum: ["document", "fragile", "electronics", "clothing", "other"],
    },

    weight: {
      type: Number,
      required: true,
      min: 0.1,
    },

    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },

    description: String,

    //Locations
    pickupAddress: {
      city: { type: String, required: true },
      addressLine: String,
      pincode: String,
    },

    destinationAddress: {
      city: { type: String, required: true },
      addressLine: String,
      pincode: String,
    },

    //Pricing
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    //Shipment Status
    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "picked",
        "in_transit",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },

    //Admin handling
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Dates
    preferredDate: Date,
    deliveredAt: Date,
    cancelledAt: Date,

    notes: String,
  },
  { timestamps: true },
);

export default mongoose.model("Order", orderSchema);
