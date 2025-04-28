// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const { sendMessage, getMessagesForTenant } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, sendMessage);           // Admin sends message to tenant
router.get('/', protect, getMessagesForTenant);   // Tenant views messages (authenticated route)

module.exports = router;
