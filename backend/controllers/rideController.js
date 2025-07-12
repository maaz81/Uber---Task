const Ride = require('../models/Ride');
const User = require('../models/User');
const { assignRandomDriver } = require('../utils/driverList');
const fs = require('fs');
const path = require('path');

const createRide = async (req, res) => {
  try {
    const { pickup, drop, payMethod } = req.body;

    const assignedDriver = assignRandomDriver();

    const newRide = await Ride.create({
      pickup,
      drop,
      user: req.user._id,
      payMethod: payMethod || 'cash',
      driver: assignedDriver
    });

    // Optional: link ride in user doc if needed
    await User.findByIdAndUpdate(req.user._id, {
      $push: { rides: newRide._id }
    });

    res.status(201).json(newRide);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create ride' });
  }
};

const getRides = async (req, res) => {
  try {
    const userId = req.user._id;
    const rides = await Ride.find({ user: userId }).sort({ time: -1 });
    res.json(rides);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch your rides' });
  }
};

const getAllRides = async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../utils/data.json');
    const ridesJson = fs.readFileSync(dataPath, 'utf-8');
    const rides = JSON.parse(ridesJson);
    res.json(rides);
  } catch (err) {
    console.error('Error reading ride data:', err);
    res.status(500).json({ message: 'Could not load rides data' });
  }
};

const getAllRidesFromDB = async (req, res) => {
  try {
    const rides = await Ride.find().populate('user', 'name email').sort({ time: -1 });
    res.json(rides);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch all DB rides' });
  }
};


module.exports = { createRide, getRides, getAllRides, getAllRidesFromDB };
