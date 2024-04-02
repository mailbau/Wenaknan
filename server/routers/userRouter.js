const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Add a new user
router.post('/add', userController.addUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

// Verify/login user
router.post('/login', userController.verifyUser);

module.exports = router;