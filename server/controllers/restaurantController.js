const restaurant = require('../models/restaurantModel');
const upload = require('../middleware/multerConfig');

const restaurantController = {
    getAllRestaurants: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const pageSize = parseInt(req.query.pageSize) || 2;

            const offset = (page - 1) * pageSize;

            const restaurants = await restaurant.findAll({
                limit: pageSize,
                offset: offset
            });
            res.status(200).json(restaurants);
        } catch (error) {
            console.error('Error getting all restaurants', error);
            res.status(500).json({ error: error.message });
        }
    },

    addRestaurant: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'Please upload an image' });
            }

            const { restaurant_name, restaurant_location, restaurant_description, restaurant_rating, category_id, restaurant_address } = req.body;
            const restaurant_photo_path = req.file.path;

            const newRestaurant = await restaurant.create({
                restaurant_name,
                restaurant_location,
                restaurant_description,
                restaurant_rating,
                restaurant_photo_path,
                category_id,
                restaurant_address
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