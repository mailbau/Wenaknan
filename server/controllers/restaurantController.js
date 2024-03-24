const restaurant = require('../models/restaurantModel');

const restaurantController = {
    getAllRestaurants: async (req, res) => {
        try {
            const restaurants = await restaurant.findAll();
            res.status(200).json(restaurants);
        } catch (error) {
            console.error('Error getting all restaurants', error);
            res.status(500).json({ error: error.message });
        }
    },

    addRestaurant: async (req, res) => {
        try {
            const { restaurant_name, restaurant_location, restaurant_rating } = req.body;
            const newRestaurant = await restaurant.create({
                restaurant_name,
                restaurant_location,
                restaurant_rating
            });
            res.status(201).json(newRestaurant);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteRestaurant: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await restaurant.destroy({
                where: {
                    restaurant_id: id
                }
            });
            if (deleted) {
                res.status(204).json({ message: 'Restaurant deleted' });
            } else {
                res.status(404).json({ message: 'Restaurant not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = restaurantController;