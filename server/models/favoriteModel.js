const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    },
}, {
    tableName: 'favorite',
    timestamps: false,
});

module.exports = favorite;