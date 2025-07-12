const express = require('express');
const router = express.Router();
const {
  createRide,
  getRides,
  getAllRides,
  getAllRidesFromDB
} = require('../controllers/rideController');
const protect = require('../middleware/authMiddleware');
const checkAdmin = require('../middleware/checkAdmin'); // ✅ FIXED

router.post('/', protect, createRide);         // Book a ride (user)
router.get('/', protect, getRides);            // User's own rides
router.get('/all', protect, checkAdmin, getAllRides);  // Admin view only
router.get('/db', protect, checkAdmin, getAllRidesFromDB);

module.exports = router;
