const { Sequelize } = require('sequelize');

try {
    const sequelize = new Sequelize(process.env.DATABASE_URL);

    module.exports = sequelize;
} catch (error) {
    console.error('Error creating Sequelize instance', error);
}
