const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const categoryRouter = require('./routes/category.router.js');
app.use('/categories', categoryRouter);
const difficultyRouter = require('./routes/difficulty.router.js');
app.use('/difficulty', difficultyRouter);
const dishRouter = require('./routes/dish.router.js');
app.use('/dishes', dishRouter);
const priceRouter = require('./routes/price.router.js');
app.use('/prices', priceRouter);
const restaurantRouter = require('./routes/restaurant.router.js');
app.use('/restaurants', restaurantRouter);
const sampleRouter = require('./routes/sample.router.js');
app.use('/test', sampleRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});