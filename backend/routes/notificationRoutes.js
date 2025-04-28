// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const { createNotification, getNotifications } = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createNotification);  // Only Admin can create notifications
router.get('/', protect, getNotifications);    // Admin or Tenant can view notifications

module.exports = router;
