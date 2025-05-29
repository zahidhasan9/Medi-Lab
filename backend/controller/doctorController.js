import Doctor from '../models/doctorModel.js';

export const createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};

export const getallDoctor = async (req, res) => {
  const doctor = await Doctor.find();
  res.json(doctor);
};

export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const updated = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  await Doctor.findByIdAndDelete(id);
  res.json({ message: 'Doctor deleted' });
};
