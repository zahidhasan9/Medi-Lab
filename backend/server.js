import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';

import adminRoutes from './routes/adminRoutes.js';
import donorRoutes from './routes/donorRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

connectDB(); // Connect to MongoDB
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/chats', chatRoutes);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.status(200).json({ message: 'running' });
});
app.listen(PORT, () => {
  console.log('server [STARTED] ~ http://localhost:5000');
});
