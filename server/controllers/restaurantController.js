const Restaurant = require('../models/restaurantModel');

const restaurantController = {
    addRestaurant: async (req, res) => {
        try {
            const { name, rating, location } = req.body;
            const newRestaurant = await Restaurant.create({
                restaurantID,
                name,
                rating,
                location,
            });
            res.status(201).json(newRestaurant);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = restaurantController;