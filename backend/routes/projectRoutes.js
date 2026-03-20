const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

router
  .route('/')
  .get(getProjects)
  .post(protect, authorize('admin'), upload.single('image'), createProject);

router
  .route('/:id')
  .get(getProject)
  .put(protect, authorize('admin'), upload.single('image'), updateProject)
  .delete(protect, authorize('admin'), deleteProject);

module.exports = router;
