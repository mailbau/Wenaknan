const express = require('express');
require('dotenv').config();

const restaurantRouter = require('./routers/restaurantRouter');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/restaurants', restaurantRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});