const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const restaurant = require('./restaurantModel');

const favorite = sequelize.define('favorite', {
    favorite_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: restaurant,
            key: 'restaurant_id'
          }
    },
}, {
    tableName: 'favorite',
    timestamps: false,
});

module.exports = favorite;