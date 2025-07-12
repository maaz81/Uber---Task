const jwt = require('jsonwebtoken');
const envSecret = require('../config/env');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, envSecret.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = generateToken;
