const express = require('express');
const router = express.Router();
const { signup, login , getmyRide, logout } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getmyRide);                  // For any logged-in user
router.get('/admin/me', protect, checkAdmin, getmyRide); // Optional: admin only route

module.exports = router;
