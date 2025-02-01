import { Schema, model, models } from "mongoose";

const ActicationCodeSchema = new Schema(
  {
    code: {
      type: Number,
      required: [true, "Code is required."],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required."],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const ActicationCode =
  models.ActicationCode || model("ActicationCode", ActicationCodeSchema);

export default ActicationCode;
