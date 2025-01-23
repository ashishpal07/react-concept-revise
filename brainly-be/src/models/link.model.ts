import mongoose, { model } from "mongoose";

const linkSchema = new mongoose.Schema({
  uniqueId: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Link = model("Link", linkSchema);
