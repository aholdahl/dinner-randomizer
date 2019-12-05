const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('In categoryRouter GET request');
    let queryText = `SELECT * FROM "category" ORDER BY "category" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In categoryRouter POST request: ', req.body);
    let queryText = `INSERT INTO "category" ("category") VALUES ($1);`
    pool.query(queryText, [req.body.category])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('In categoryRouter PUT request: ', req.body);
    let queryText = `UPDATE "category" SET "category" = $1 WHERE "id" = $2;`
    pool.query(queryText, [req.body.category, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In categoryRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "category" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;