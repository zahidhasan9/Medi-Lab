import express from 'express';
import { createDoctor, updateDoctor, getallDoctor, deleteDoctor } from '../controller/doctorController.js';

const router = express.Router();

router.post('/', createDoctor);
router.get('/get', getallDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;
