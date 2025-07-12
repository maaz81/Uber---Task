const mongoose = require('mongoose');
const envSecret = require('./env')

const connectDB = async () => {
  try {
    await mongoose.connect(envSecret.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
