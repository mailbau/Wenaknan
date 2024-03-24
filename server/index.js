const express = require('express');
const listEndpoints = require('express-list-endpoints');
require('dotenv').config();

const restaurantRouter = require('./routers/restaurantRouter');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/restaurant', restaurantRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(listEndpoints(app));
});

module.exports = server;