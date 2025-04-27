// routes/tenantRoutes.js
const express = require('express');
const router = express.Router();
const {
  registerTenant,
  authTenant,
  getTenantProfile,
} = require('../controllers/tenantController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerTenant);
router.post('/login', authTenant);
router.get('/profile', protect, getTenantProfile);

module.exports = router;
