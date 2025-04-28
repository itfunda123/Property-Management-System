// controllers/notificationController.js
const Notification = require('../models/Notification');

// Create a new notification
const createNotification = async (req, res) => {
  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(400).json({ message: "Please provide both title and message." });
  }

  try {
    const notification = new Notification({ title, message });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Get all notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notifications" });
  }
};

module.exports = { createNotification, getNotifications };
