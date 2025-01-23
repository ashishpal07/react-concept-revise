import mongoose, { model } from "mongoose";

const typeEnum = ['image', 'video', 'article', 'audio'];

const contentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  type: { type: typeEnum, required: true },

  link: { type: String, required: true },

  title: { type: String, required: true },

  tags: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }
  ]
}, {
  timestamps: true,
});

export const Content = model('Content', contentSchema);
