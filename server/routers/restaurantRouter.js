const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Add a new restaurant
router.post('/add', restaurantController.addRestaurant);

// Delete a restaurant
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;