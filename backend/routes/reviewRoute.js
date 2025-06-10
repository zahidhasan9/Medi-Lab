import express from 'express';
import { createReview, getallReview } from '../controller/reviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/get', getallReview);

export default router;
