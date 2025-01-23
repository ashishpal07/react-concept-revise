import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },

  userName: { type: String, unique: true, required: true },

  password: { type: String, required: true },
}, {
  timestamps: true,
});

export const User = model('User', userSchema);
