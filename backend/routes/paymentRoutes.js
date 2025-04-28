const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createPayment, getMyPayments } = require('../controllers/paymentController');

const router = express.Router();

// Tenant creates a payment
router.post('/', protect, createPayment);

// Tenant fetches their own payments
router.get('/my-payments', protect, getMyPayments);

module.exports = router;
