const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
  },
  longDescription: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  techStack: [{
    type: String,
    required: true,
  }],
  liveUrl: {
    type: String,
    default: '',
  },
  githubUrl: {
    type: String,
    default: '',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'AI/ML', 'Other'],
    default: 'Full Stack',
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema);
