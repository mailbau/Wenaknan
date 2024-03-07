const { Pool } = require('pg');

try {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    module.exports = { pool };
} catch (error) {
    console.error('Error creating database pool', error);
}