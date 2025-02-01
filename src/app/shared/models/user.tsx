import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "Email is required."],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address.",
      ],
    },
    whatsapp: {
      type: Number,
      match: [/^\d{11}$/, "Please enter a valid WhatsApp number."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    image: {
      type: String,
    },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    token: {
      type: String,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const User = models.User || model("User", UserSchema);

export default User;
