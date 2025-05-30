import express from 'express';
import {
  createAppointment,
  approveAppointment,
  getDoctorAppointments,
  getPatientAppointments
} from '../controllers/appointment.controller.js';

const router = express.Router();

// ✅ Create new appointment
router.post('/', createAppointment);

// ✅ Approve appointment by ID
router.put('/approve/:id', approveAppointment);

// ✅ Get appointments for a specific doctor
router.get('/doctor/:doctorId', getDoctorAppointments);

// ✅ Get appointments for a specific patient
router.get('/patient/:patientId', getPatientAppointments);

export default router;
