const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const restaurant = sequelize.define('restaurant', {
    restaurant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurant_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurant_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'restaurant',
    timestamps: false,
});

module.exports = restaurant;