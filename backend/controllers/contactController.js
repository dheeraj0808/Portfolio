const Contact = require('../models/Contact');

// @desc    Send contact message
// @route   POST /api/contact
// @access  Public
exports.sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message',
      });
    }

    const contact = await Contact.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages
// @route   GET /api/contact
// @access  Private/Admin
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark message as read
// @route   PUT /api/contact/:id/read
// @access  Private/Admin
exports.markAsRead = async (req, res, next) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found',
      });
    }

    res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
exports.deleteMessage = async (req, res, next) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard stats
// @route   GET /api/contact/stats
// @access  Private/Admin
exports.getStats = async (req, res, next) => {
  try {
    const totalMessages = await Contact.countDocuments();
    const unreadMessages = await Contact.countDocuments({ read: false });
    const Project = require('../models/Project');
    const totalProjects = await Project.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalMessages,
        unreadMessages,
        totalProjects,
      },
    });
  } catch (error) {
    next(error);
  }
};
