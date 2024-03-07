const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Add a new restaurant
router.post('/add', restaurantController.addRestaurant);

module.exports = router;