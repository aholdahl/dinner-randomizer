const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('In priceRouter GET request');
    let queryText = `SELECT * FROM "price";`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In priceRouter POST request: ', req.body);
    let queryText = `INSERT INTO "price" ("price") VALUES ($1);`
    pool.query(queryText, [req.body.price])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('In priceRouter PUT request: ', req.body);
    let queryText = `UPDATE "price" SET "price" = $1 WHERE "id" = $2;`
    pool.query(queryText, [req.body.price, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In priceRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "price" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;