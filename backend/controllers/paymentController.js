const Payment = require('../models/Payment');

// @desc    Tenant makes a payment
// @route   POST /api/payments
// @access  Private (Tenant)
const createPayment = async (req, res) => {
  const { amount, paymentMethod } = req.body;

  if (!amount) {
    return res.status(400).json({ message: 'Amount is required' });
  }

  const payment = new Payment({
    tenant: req.user._id,
    amount,
    paymentMethod,
  });

  await payment.save();

  res.status(201).json({ message: 'Payment recorded successfully', payment });
};

// @desc    Get tenant's payments
// @route   GET /api/payments/my-payments
// @access  Private (Tenant)
const getMyPayments = async (req, res) => {
  const payments = await Payment.find({ tenant: req.user._id }).sort({ createdAt: -1 });
  res.json(payments);
};

module.exports = { createPayment, getMyPayments };
