const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

randomNumber = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', (req, res) => {
    console.log('In restaurantRouter GET request');
    res.send(sampleData);
    let queryText = `SELECT * FROM "restaurant";`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/random', (req, res) => {
    let randomizeMe = randomNumber(0, (sampleData.length - 1));
    console.log('In restaurantRouter GET-random request: ', randomizeMe);
    let queryText = `SELECT * FROM "restaurant" WHERE "id" = $1;`
    pool.query(queryText, [randomizeMe])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In restaurantRouter POST request: ', req.body);
    let queryText = `INSERT INTO "restaurant" ("restaurant", "menu_url", "image", "address", "phone_number", "delivers", "reservation", "price_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
    pool.query(queryText, [req.body.restaurant, req.body.menu_url, req.body.image, req.body.address, req.body.phone_number, req.body.delivers, req.body.reservation, req.body.price_id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('In restaurantRouter PUT request: ', req.body);
    let queryText = `UPDATE "restaurant" SET "restaurant" = $1, "menu_url" = $2, "image" = $3, "address" = $4, "phone_number" = $5, "delivers" = $6, "reservation" = $7, "price_id" = $8 WHERE "id" = $9;`
    pool.query(queryText, [req.body.restaurant, req.body.menu_url, req.body.image, req.body.address, req.body.phone_number, req.body.delivers, req.body.reservation, req.body.price_id, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In restaurantRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "restaurant" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;