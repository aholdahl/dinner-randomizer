const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

let sampleData = [
    {
        id: 1,
        cuisine: 'american'
    },
    {
        id: 2,
        cuisine: 'french'
    },
    {
        id: 3,
        cuisine: 'mexican'
    },
    {
        id: 4,
        cuisine: 'italian'
    },
    {
        id: 5,
        cuisine: 'asian'
    },
];

router.get('/', (req, res) => {
    console.log('In cuisineRouter GET request');
    res.send(sampleData);
    // let queryText = `SELECT * FROM "cuisine";`
    // pool.query(queryText)
    //     .then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

router.post('/', (req, res) => {
    console.log('In cuisineRouter POST request: ', req.body);
    sampleData.push(req.body);
    res.sendStatus(200);
    // let queryText = `INSERT INTO "cuisine" ("cuisine") VALUES ($1);`
    // pool.query(queryText, [req.body.cuisine])
    // .then((result)=>{
    //     res.sendStatus(200);
    // }).catch((error)=>{
    //     console.log(error);
    //     res.sendStatus(500);
    // });
});

module.exports = router;