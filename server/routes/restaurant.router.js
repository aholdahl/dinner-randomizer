const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

randomNumber = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/all', (req, res) => {
    console.log('In restaurantRouter GET-all request');
    let queryText = `SELECT "restaurant"."id", "restaurant", "menu_url", "image", "address", "phone_number", "delivers", "reservation", "price_id", "price", json_agg("restaurant_category") AS "categories" FROM "restaurant" LEFT JOIN "price" ON "price"."id" = "restaurant"."price_id" LEFT JOIN (SELECT "restaurant_category"."id", "restaurant_id", "category_id", "category" FROM "restaurant_category" LEFT JOIN "category" ON "category"."id" = "restaurant_category"."category_id" ORDER BY "category" ASC) AS "restaurant_category" ON "restaurant"."id" = "restaurant_category"."restaurant_id" GROUP BY "restaurant"."id", "price"."id" ORDER BY "restaurant" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/random', (req, res) => {
    console.log('In restaurantRouter GET-random request');
    let queryText = `SELECT "restaurant"."id", "restaurant", "menu_url", "image", "address", "phone_number", "delivers", "reservation", "price_id", "price", json_agg("restaurant_category") AS "categories" FROM "restaurant" LEFT JOIN "price" ON "price"."id" = "restaurant"."price_id" LEFT JOIN (SELECT "restaurant_category"."id", "restaurant_id", "category_id", "category" FROM "restaurant_category" LEFT JOIN "category" ON "category"."id" = "restaurant_category"."category_id" ORDER BY "category" ASC) AS "restaurant_category" ON "restaurant"."id" = "restaurant_category"."restaurant_id" GROUP BY "restaurant"."id", "price"."id" ORDER BY "restaurant" ASC;`
    pool.query(queryText)
        .then((result) => {
            let randomizeMe = randomNumber(0, (Number(result.rows.length)) - 1);
            res.send(result.rows[randomizeMe]);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', async (req, res) => {
    console.log('In restaurantRouter POST request: ', req.body);
    let queryText = `INSERT INTO "restaurant" ("restaurant", "menu_url", "image", "address", "phone_number", "delivers", "reservation", "price_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING "id";`
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN;');
        let result = await connection.query(queryText, [req.body.restaurant, req.body.menu_url, req.body.image, req.body.address, req.body.phone_number, req.body.delivers, req.body.reservation, req.body.price_id || null]);
        let restaurant_id = result.rows[0].id;
        for (let category of req.body.categories) {
            await connection.query(`INSERT INTO "restaurant_category" ("restaurant_id", "category_id") VALUES ($1, $2);`, [restaurant_id, category])
        };
        await connection.query('COMMIT;');
        res.sendStatus(200);
    } catch (error) {
        await connection.query('ROLLBACK;');
        console.log(error);
        res.sendStatus(500);
    };
});

router.put('/', (req, res) => {
    console.log('In restaurantRouter PUT request: ', req.body);
    let queryText = `UPDATE "restaurant" SET "restaurant" = $1, "menu_url" = $2, "image" = $3, "address" = $4, "phone_number" = $5, "delivers" = $6, "reservation" = $7, "price_id" = $8 WHERE "id" = $9;`
    pool.query(queryText, [req.body.restaurant, req.body.menu_url, req.body.image, req.body.address, req.body.phone_number, req.body.delivers, req.body.reservation, req.body.price_id, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In restaurantRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "restaurant" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;