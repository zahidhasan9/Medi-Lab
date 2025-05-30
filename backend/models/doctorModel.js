import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  bmdc_no: String,
  degree: String,
  hospital: String,
  location: String,
  visiting_Hours: String,
  img: String,
  phone: String
});

export default mongoose.model('Doctor', doctorSchema);
