const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const user = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'user',
    timestamps: false,
});

module.exports = user;