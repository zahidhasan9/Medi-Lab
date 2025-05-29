import { Chat } from '../models/Chat';

// Send message
export const sendMessage = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get conversation between doctor and patient
export const getConversation = async (req, res) => {
  const { senderId, receiverId } = req.query;
  const messages = await Chat.find({
    $or: [
      { senderId, receiverId },
      { senderId: receiverId, receiverId: senderId }
    ]
  }).sort({ timestamp: 1 });
  res.json(messages);
};
