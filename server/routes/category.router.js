const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// let sampleData = [
//     {
//         id: 1,
//         category: 'american'
//     },
//     {
//         id: 2,
//         category: 'french'
//     },
//     {
//         id: 3,
//         category: 'mexican'
//     },
//     {
//         id: 4,
//         category: 'italian'
//     },
//     {
//         id: 5,
//         category: 'asian'
//     },
// ];

router.get('/', (req, res) => {
    console.log('In categoryRouter GET request');
    // res.send(sampleData);
    let queryText = `SELECT * FROM "category";`
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
    // sampleData.push(req.body);
    // res.sendStatus(200);
    let queryText = `INSERT INTO "category" ("category") VALUES ($1);`
    pool.query(queryText, [req.body.category])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;