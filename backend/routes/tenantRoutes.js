// routes/tenantRoutes.js
const express = require('express');
const router = express.Router();
const {
  registerTenant,
  authTenant,
  getTenantProfile,
  getAllTenants, // <-- Added this import
} = require('../controllers/tenantController');
const { protect } = require('../middleware/authMiddleware');

// Define the routes
router.post('/register', registerTenant);
router.post('/login', authTenant);
router.get('/profile', protect, getTenantProfile);

// Added route for fetching all tenants
router.get('/', getAllTenants); // <-- Added this route

module.exports = router;
