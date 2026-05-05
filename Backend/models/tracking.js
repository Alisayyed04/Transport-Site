import mongoose from "mongoose";

const trackingSchema = new mongoose.Schema(
  {
    //Reference to Order
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    //(STRICT — must match Order)
    status: {
      type: String,
      required: true,
      enum: [
        "pending",
        "approved",
        "picked",
        "in_transit",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
    },

    //Structured Location
    location: {
      city: {
        type: String,
        required: true,
      },
      hub: String, // e.g. "Pune Sorting Center"
      pincode: String,
    },

    //Human-readable message
    message: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    //Who updated this (admin/system)
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    //Explicit event time (can differ from createdAt)
    eventTime: {
      type: Date,
      default: Date.now,
    },

    //Optional metadata (future-proofing)
    meta: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Tracking", trackingSchema);
