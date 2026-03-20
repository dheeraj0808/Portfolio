const express = require('express');
const router = express.Router();
const {
  login,
  getMe,
  updateProfile,
  uploadAvatar,
  getPublicProfile,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.put('/avatar', protect, upload.single('avatar'), uploadAvatar);
router.get('/profile/public', getPublicProfile);

module.exports = router;
