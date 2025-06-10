import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  name: String,
  comment: String
});

export default mongoose.model('Review', donorSchema);
