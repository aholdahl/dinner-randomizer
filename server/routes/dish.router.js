const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

let sampleData = [
    {
        id: 1,
        dish: 'zoodles',
        image: '',
        prep_time: '15 minutes',
        difficulty_id: 1,
        difficulty: 'easy',
        cuisine_id: 4,
        cuisine: 'italian'
    },
    {
        id: 2,
        dish: 'chicken salad',
        image: '',
        prep_time: '30 minutes',
        difficulty_id: 2,
        difficulty: 'medium',
        cuisine_id: 1,
        cuisine: 'american'
    },
    {
        id: 3,
        dish: 'fajitas',
        image: '',
        prep_time: '30 minutes',
        difficulty_id: 2,
        difficulty: 'medium',
        cuisine_id: 3,
        cuisine: 'mexican'
    },
];

randomNumber = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', (req, res) => {
    console.log('In dishRouter GET request');
    res.send(sampleData);
    // let queryText = `SELECT * FROM "dish";`
    // pool.query(queryText)
    //     .then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

router.get('/random', (req, res) => {
    console.log('In dishRouter GET-random request');
    let randomizeMe = randomNumber(0, (sampleData.length -1));
    console.log(sampleData[randomizeMe])
    res.send(sampleData[randomizeMe]);
    // let queryText = `SELECT * FROM "dish" WHERE "id" = $1;`
    // pool.query(queryText, [randomizeMe])
    //     .then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

router.post('/', (req, res) => {
    console.log('In dishRouter POST request: ', req.body);
    sampleData.push(req.body);
    res.sendStatus(200);
    // let queryText = `INSERT INTO "dish" ("dish", "image", "prep_time", "difficulty", "cuisine") VALUES ($1, $2, $3, $4, $5);`
    // pool.query(queryText, [req.body.dish, req.body.image, req.body.prep_time, req.body.difficulty, req.body.cuisine])
    // .then((result)=>{
    //     res.sendStatus(200);
    // }).catch((error)=>{
    //     console.log(error);
    //     res.sendStatus(500);
    // });
});

module.exports = router;