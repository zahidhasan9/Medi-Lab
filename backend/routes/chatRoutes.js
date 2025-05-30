// import express from 'express';
// import { sendMessage, getConversation } from '../controller/chatController.js';

// const router = express.Router();

// router.post('/send', sendMessage);
// router.get('/conversation', getConversation);

// export default router;

import express from 'express';
import { sendMessage, getMessagesByAppointment } from '../controller/chatController.js';

const router = express.Router();

// ✅ Send a message
router.post('/', sendMessage);

// ✅ Get messages of a specific appointment
router.get('/:appointmentId', getMessagesByAppointment);

export default router;
