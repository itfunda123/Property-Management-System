// controllers/tenantController.js
const Tenant = require('../models/Tenant');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register Tenant
const registerTenant = async (req, res) => {
  const { fullName, email, phone, password } = req.body;
  try {
    const tenantExists = await Tenant.findOne({ email });
    if (tenantExists) {
      return res.status(400).json({ message: 'Tenant already exists' });
    }
    const tenant = await Tenant.create({ fullName, email, phone, password });
    res.status(201).json({
      _id: tenant._id,
      fullName: tenant.fullName,
      email: tenant.email,
      token: generateToken(tenant._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Tenant
const authTenant = async (req, res) => {
  const { email, password } = req.body;
  try {
    const tenant = await Tenant.findOne({ email });
    if (tenant && (await tenant.matchPassword(password))) {
      res.json({
        _id: tenant._id,
        fullName: tenant.fullName,
        email: tenant.email,
        token: generateToken(tenant._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Tenant Profile
const getTenantProfile = async (req, res) => {
  const tenant = await Tenant.findById(req.tenant._id);
  if (tenant) {
    res.json({
      _id: tenant._id,
      fullName: tenant.fullName,
      email: tenant.email,
      phone: tenant.phone,
    });
  } else {
    res.status(404).json({ message: 'Tenant not found' });
  }
};

module.exports = { registerTenant, authTenant, getTenantProfile };
