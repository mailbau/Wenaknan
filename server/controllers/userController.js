const user = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            const { name, user_name, user_email, user_password } = req.body;

            const existingUser = await user.findOne({ where: { user_name } });
            if (existingUser) {
                return res.status(409).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(user_password, 10);

            const newUser = await user.create({
                name,
                user_name,
                user_email,
                user_password: hashedPassword
            });
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            console.error('Error registering user', error);
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
    },

    verifyUser: async (req, res) => {
        try {
            const { usernameOrEmail, password } = req.body;

            // check if usernameOrEmail is email
            const isEmail = usernameOrEmail.includes('@');

            let existingUser;

            if (isEmail) {
                existingUser = await user.findOne({ where: { user_email: usernameOrEmail } });
            } else {
                existingUser = await user.findOne({ where: { user_name: usernameOrEmail } });
            }

            if (!existingUser) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            console.log('Retrieved user from database:', existingUser);

            // compare passwords
            const passwordMatch = await bcrypt.compare(password, existingUser.user_password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // if credentials are valid, generate jwt token
            const token = jwt.sign(
                {
                    user_id: existingUser.user_id,
                    name: existingUser.name,
                    username: existingUser.user_name,
                    email: existingUser.user_email
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({ message: 'Login Successful', token });
        } catch (error) {
            console.error('Error logging in user', error);
            res.status(500).json({ error: error.message });
        }
    }

};

module.exports = userController;