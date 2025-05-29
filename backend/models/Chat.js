import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  senderId: mongoose.Schema.Types.ObjectId,
  receiverId: mongoose.Schema.Types.ObjectId,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

export const Chat = mongoose.model('Chat', chatSchema);
