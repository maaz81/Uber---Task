const express = require('express');
const router = express.Router();
const {
  createRide,
  getRides,
  getAllRides,
  getAllRidesFromDB
} = require('../controllers/rideController');
const protect = require('../middleware/authMiddleware');
const checkAdmin = require('../middleware/checkAdmin'); 

router.post('/', protect, createRide);         
router.get('/', protect, getRides);           
router.get('/all', protect, checkAdmin, getAllRides);  
router.get('/db', protect, checkAdmin, getAllRidesFromDB);

module.exports = router;
