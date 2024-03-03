const express = require('express');
const dotenv = require('dotenv');

// const connectDB = require('./config/db');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

// connectDB();

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });