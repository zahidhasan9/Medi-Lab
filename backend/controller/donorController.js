import Donor from '../models/donorModel.js';

export const createDonor = async (req, res) => {
  const donor = await Donor.create(req.body);
  res.status(201).json(donor);
};

export const getallDonor = async (req, res) => {
  const doctor = await Donor.find();
  res.json(doctor);
};

export const updateDonor = async (req, res) => {
  const { id } = req.params;
  const updated = await Donor.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteDonor = async (req, res) => {
  const { id } = req.params;
  await Donor.findByIdAndDelete(id);
  res.json({ message: 'Donor deleted' });
};
