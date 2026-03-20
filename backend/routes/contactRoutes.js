const express = require('express');
const router = express.Router();
const {
  sendMessage,
  getMessages,
  markAsRead,
  deleteMessage,
  getStats,
} = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

router.post('/', sendMessage);
router.get('/', protect, authorize('admin'), getMessages);
router.get('/stats', protect, authorize('admin'), getStats);
router.put('/:id/read', protect, authorize('admin'), markAsRead);
router.delete('/:id', protect, authorize('admin'), deleteMessage);

module.exports = router;
