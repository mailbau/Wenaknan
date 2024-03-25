const user = require('../models/userModel');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await user.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error getting all users', error);
            res.status(500).json({ error: error.message });
        }
    },

    addUser: async (req, res) => {
        try {
            const { name, user_name, user_password } = req.body;
            const newUser = await user.create({
                name,
                user_name,
                user_password
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await user.destroy({
                where: {
                    user_id: id
                }
            });
            if (deleted) {
                res.status(204).json({ message: 'User deleted' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;