import express from 'express';
import {
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getallAppointment
} from '../controller/appointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/get', getallAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

export default router;
