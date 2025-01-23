import mongoose, { model } from "mongoose";

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, {
  timestamps: true,
});

export const Tag = model('Tag', tagSchema);
