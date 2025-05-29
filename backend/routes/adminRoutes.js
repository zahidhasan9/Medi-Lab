import express from 'express';
import { registerAdmin, loginAdmin, getAllAdmins, deleteAdmin } from '../controller/adminController.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin);
router.get('/', getAllAdmins);
router.delete('/:id', deleteAdmin);

export default router;
