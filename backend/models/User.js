const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin',
  },
  title: {
    type: String,
    default: 'Full Stack Developer',
  },
  bio: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  resumeUrl: {
    type: String,
    default: '',
  },
  socialLinks: {
    github: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    website: { type: String, default: '' },
  },
  skills: [{
    name: { type: String, required: true },
    level: { type: Number, min: 0, max: 100, default: 50 },
    category: { type: String, default: 'Other' },
  }],
  experience: [{
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, default: '' },
    from: { type: Date, required: true },
    to: { type: Date },
    current: { type: Boolean, default: false },
    description: { type: String, default: '' },
  }],
  education: [{
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String, default: '' },
    from: { type: Date, required: true },
    to: { type: Date },
    current: { type: Boolean, default: false },
    description: { type: String, default: '' },
  }],
}, {
  timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
