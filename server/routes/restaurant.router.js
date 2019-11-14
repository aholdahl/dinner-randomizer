const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

let sampleData = [
    {
        id: 1,
        restaurant: 'Benihana',
        image: '',
        delivers: false,
        price_id: 2,
        price: '$$',
        cuisine_id: 5,
        cuisine: 'asian'
    },
    {
        id: 2,
        restaurant: 'Bryant Lake Bowl',
        image: '',
        delivers: false,
        price_id: 1,
        price: '$',
        cuisine_id: 1,
        cuisine: 'american'
    },
    {
        id: 3,
        restaurant: 'Rojo',
        image: '',
        delivers: false,
        price_id: 2,
        price: '$$',
        cuisine_id: 3,
        cuisine: 'mexican'
    },
    {
        id: 4,
        restaurant: 'Meritage',
        image: '',
        delivers: false,
        price_id: 3,
        price: '$$$',
        cuisine_id: 2,
        cuisine: 'french'
    }
];

randomNumber = (min, max)=> {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', (req, res) => {
    console.log('In restaurantRouter GET request');
    res.send(sampleData);
    // let queryText = `SELECT * FROM "restaurant";`
    // pool.query(queryText)
    //     .then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

router.get('/random', (req, res) => {
    console.log('In restaurantRouter GET-random request');
    let randomizeMe = randomNumber(0, (sampleData.length -1) );
    console.log(sampleData[randomizeMe])
    res.send(sampleData[randomizeMe]);
    // let queryText = `SELECT * FROM "restaurant" WHERE "id" = $1;`
    // pool.query(queryText, [randomizeMe])
    //     .then((result) => {
    //         res.send(result.rows);
    //     }).catch((error) => {
    //         console.log(error);
    //         res.sendStatus(500);
    //     });
});

router.post('/', (req, res) => {
    console.log('In restaurantRouter POST request: ', req.body);
    sampleData.push(req.body);
    res.sendStatus(200);
    // let queryText = `INSERT INTO "restaurant" ("restaurant", "image", "delivers", "price", "cuisine") VALUES ($1, $2, $3, $4, $5);`
    // pool.query(queryText, [req.body.restaurant, req.body.image, req.body.delivers, req.body.price, req.body.cuisine])
    // .then((result)=>{
    //     res.sendStatus(200);
    // }).catch((error)=>{
    //     console.log(error);
    //     res.sendStatus(500);
    // });
});

module.exports = router;