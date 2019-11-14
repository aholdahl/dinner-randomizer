const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

let sampleData = [
    {
        id: 1,
        price: '$'
    },
    {
        id: 2,
        price: '$$'
    },
    {
        id: 3,
        price: '$$$'
    },
];

router.get('/', (req, res) => {
    console.log('In priceRouter GET request');
    res.send(sampleData);
    // let queryText = `SELECT * FROM "price";`
    // pool.query(queryText)
    //     .then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

router.post('/', (req, res) => {
    console.log('In priceRouter POST request: ', req.body);
    sampleData.push(req.body);
    res.sendStatus(200);
    // let queryText = `INSERT INTO "price" ("price") VALUES ($1);`
    // pool.query(queryText, [req.body.price])
    // .then((result)=>{
    //     res.sendStatus(200);
    // }).catch((error)=>{
    //     console.log(error);
    //     res.sendStatus(500);
    // });
});

module.exports = router;