import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  email: String,
  department: String,
  message: String,
  date: String,
  phone: String,
  time: String,
  status: { type: String, default: 'Pending' }
});

export default mongoose.model('Appointment', appointmentSchema);
