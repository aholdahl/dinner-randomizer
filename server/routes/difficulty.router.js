const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// let sampleData = [
//     {
//         id: 1,
//         difficulty: 'easy'
//     },
//     {
//         id: 2,
//         difficulty: 'medium'
//     },
//     {
//         id: 3,
//         difficulty: 'hard'
//     },
// ];

router.get('/', (req, res) => {
    console.log('In difficultyRouter GET request');
    // res.send(sampleData);
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
    // sampleData.push(req.body);
    // res.sendStatus(200);
    let queryText = `INSERT INTO "difficulty" ("difficulty") VALUES ($1);`
    pool.query(queryText, [req.body.difficulty])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;