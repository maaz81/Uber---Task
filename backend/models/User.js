const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  rides : [{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Ride'
  }]
});

module.exports = mongoose.model('User', userSchema);
