import express from 'express';
import { sendMessage, getConversation } from '../controller/chatController.js';

const router = express.Router();

router.post('/send', sendMessage);
router.get('/conversation', getConversation);

export default router;
