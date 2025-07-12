const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  pickup: { type: String, required: true },
  drop: { type: String, required: true },
  status: { type: String, default: 'requested' },
  payStatus: { type: String, default: 'not paid' },
  payMethod: { type: String, default: 'cash' },
  driver: {
    name: String,
    phone: String,
    vehicle: String,
    number: String,
    rating: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ride', rideSchema);
