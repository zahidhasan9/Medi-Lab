import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  name: String,
  age: String,
  bloodGroup: String,
  phone: String,
  health_issues: String,
  donation_type: String,
  address: String,
  status: { type: String, default: 'Pending' }
});

export default mongoose.model('Donor', donorSchema);
