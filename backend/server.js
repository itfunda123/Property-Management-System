// server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const tenantRoutes = require('./routes/tenantRoutes');
const notificationRoutes = require('./routes/notificationRoutes');  // Added notifications
const messageRoutes = require('./routes/messageRoutes');            // Added messages
const adminAuthRoutes = require('./routes/adminAuth');              // Added admin authentication
const paymentRoutes = require('./routes/paymentRoutes');            // Added payment routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/tenants', tenantRoutes);               // Tenant routes
app.use('/api/notifications', notificationRoutes);    // Notifications route
app.use('/api/messages', messageRoutes);              // Messages route
app.use('/api/admin/auth', adminAuthRoutes);          // Admin authentication routes
app.use('/api/payments', paymentRoutes);              // Payment routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
