import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    subscription: {
      type: String,
      required: true,
      default: "free",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
