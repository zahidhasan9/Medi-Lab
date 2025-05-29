import Appointment from '../models/appointmentModel.js';

export const createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json(appointment);
};
export const getallAppointment = async (req, res) => {
  const appointment = await Appointment.find();
  res.json(appointment);
};

export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const updated = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  await Appointment.findByIdAndDelete(id);
  res.json({ message: 'Appointment deleted' });
};
