const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('In difficultyRouter GET request');
    let queryText = `SELECT * FROM "difficulty";`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In difficultyRouter POST request: ', req.body);
    let queryText = `INSERT INTO "difficulty" ("difficulty") VALUES ($1);`
    pool.query(queryText, [req.body.difficulty])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('In difficultyRouter PUT request: ', req.body);
    let queryText = `UPDATE "difficulty" SET "difficulty" = $1 WHERE "id" = $2;`
    pool.query(queryText, [req.body.difficulty, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In difficultyRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "difficulty" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;