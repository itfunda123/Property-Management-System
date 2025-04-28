// controllers/messageController.js
const Message = require('../models/Message');

// Send message to a tenant
const sendMessage = async (req, res) => {
  const { tenantId, subject, message } = req.body;

  if (!tenantId || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newMessage = new Message({
      adminId: req.user.id,  // Assuming admin sends the message
      tenantId,
      subject,
      message
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: "Server error while sending message" });
  }
};

// Get messages for a specific tenant
const getMessagesForTenant = async (req, res) => {
  try {
    const messages = await Message.find({ tenantId: req.user.id }).populate('adminId', 'name email');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};

module.exports = { sendMessage, getMessagesForTenant };
