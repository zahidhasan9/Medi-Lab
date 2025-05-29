import express from 'express';
import { createDonor, updateDonor, deleteDonor, getallDonor } from '../controller/donorController.js';

const router = express.Router();

router.post('/', createDonor);
router.get('/get', getallDonor);
router.put('/:id', updateDonor);
router.delete('/:id', deleteDonor);

export default router;
