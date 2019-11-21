const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('In ingredientRouter GET request');
    let queryText = `SELECT * FROM "ingredient" ORDER BY "ingredient" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In ingredientRouter POST request: ', req.body);
    let queryText = `INSERT INTO "ingredient" ("ingredient") VALUES ($1);`
    pool.query(queryText, [req.body.ingredient])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('In ingredientRouter PUT request: ', req.body);
    let queryText = `UPDATE "ingredient" SET "ingredient" = $1 WHERE "id" = $2;`
    pool.query(queryText, [req.body.ingredient, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In ingredientRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "ingredient" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;