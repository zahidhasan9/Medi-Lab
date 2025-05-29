import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, email, password: hash });
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAdmins = async (req, res) => {
  const admins = await Admin.find().select('-password');
  res.json(admins);
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  await Admin.findByIdAndDelete(id);
  res.json({ message: 'Admin deleted' });
};
