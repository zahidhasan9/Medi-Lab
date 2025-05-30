// controllers/chat.controller.js

import Chat from '../models/Chat.js';
import Appointment from '../models/Appointment.js';

// ✅ Send Message (only if appointment is approved)
export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, appointmentId, message } = req.body;

    // Check if appointment is approved
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment || appointment.status !== 'approved') {
      return res.status(403).json({ message: 'You cannot chat until appointment is approved.' });
    }

    const newMessage = await Chat.create({
      senderId,
      receiverId,
      appointmentId,
      message
    });

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all messages by appointment
export const getMessagesByAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const messages = await Chat.find({ appointmentId }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
