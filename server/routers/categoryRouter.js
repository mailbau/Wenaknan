const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
router.get('/', categoryController.getAllCategories);

// Add a new category
router.post('/add', categoryController.addCategory);

// Add multiple category
router.post('/addBulk', categoryController.addBulkCategories);
//sample body {"category_names": ["Italian", "Chinese", "Mexican", "Indian", "Japanese"]}
//max 17 klo dari elephantsql

// Delete a category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;