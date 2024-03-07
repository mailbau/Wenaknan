const express = require('express');
require('dotenv').config();
const { pool } = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});