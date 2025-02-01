import { Schema, model, models } from "mongoose";

const OtpCodeSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      lowercase: true,
    },
    otpcode: {
      type: String,
      default: null,
    },
    otptype: {
      type: Number,
      default: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const OtpCode = models.OtpCode || model("OtpCode", OtpCodeSchema);

export default OtpCode;
