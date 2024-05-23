const category = require('../models/categoryModel');

const categoryController = {
    getAllCategories: async (req, res) => {
        try {
            const categories = await category.findAll();
            res.status(200).json(categories);
        } catch (error) {
            console.error('Error getting all categories', error);
            res.status(500).json({ error: error.message });
        }
    },

    addCategory: async (req, res) => {
        try {
            const { category_name } = req.body;
            const newCategory = await category.create({ 
                category_name
            });
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    addBulkCategories: async (req, res) => {
        try {
            const { category_names } = req.body; // Expecting category_names to be an array of category names
    
            if (!Array.isArray(category_names)) {
                return res.status(400).json({ error: 'category_names should be an array' });
            }
    
            const newCategories = await Promise.all(
                category_names.map(async (category_name) => {
                    return await category.create({ category_name });
                })
            );
    
            res.status(201).json(newCategories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await category.destroy({
                where: {
                    category_id: id
                }
            });
            if (deleted) {
                res.status(204).json({ message: 'Category deleted' });
            } else {
                res.status(404).json({ message: 'category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = categoryController;