import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Link = mongoose.model("Link", linkSchema);
