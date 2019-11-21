const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

randomNumber = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', (req, res) => {
    console.log('In dishRouter GET request');
    let queryText = `SELECT "dish"."id", "dish", "recipe_url", "image", "prep_time", "servings", "difficulty_id", "difficulty", json_agg("dish_category") AS "categories", json_agg("dish_ingredient") AS "ingredients" FROM "dish" LEFT JOIN "difficulty" ON "difficulty"."id" = "dish"."difficulty_id" LEFT JOIN (SELECT "dish_category"."id", "dish_id", "category_id", "category" FROM "dish_category" LEFT JOIN "category" ON "category"."id" = "dish_category"."category_id" ORDER BY "category" ASC) AS "dish_category" ON "dish"."id" = "dish_category"."dish_id" LEFT JOIN (SELECT "dish_ingredient"."id", "dish_id", "ingredient_id", "ingredient" FROM "dish_ingredient" LEFT JOIN "ingredient" ON "ingredient"."id" = "dish_ingredient"."ingredient_id" ORDER BY "ingredient" ASC) AS "dish_ingredient" ON "dish"."id" = "dish_ingredient"."dish_id" GROUP BY "dish"."id", "difficulty"."id" ORDER BY "dish" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/random', (req, res) => {
    console.log('In dishRouter GET-random request');
    let queryText = `SELECT "dish"."id", "dish", "recipe_url", "image", "prep_time", "servings", "difficulty_id", "difficulty", json_agg("dish_category") AS "categories", json_agg("dish_ingredient") AS "ingredients" FROM "dish" LEFT JOIN "difficulty" ON "difficulty"."id" = "dish"."difficulty_id" LEFT JOIN (SELECT "dish_category"."id", "dish_id", "category_id", "category" FROM "dish_category" LEFT JOIN "category" ON "category"."id" = "dish_category"."category_id" ORDER BY "category" ASC) AS "dish_category" ON "dish"."id" = "dish_category"."dish_id" LEFT JOIN (SELECT "dish_ingredient"."id", "dish_id", "ingredient_id", "ingredient" FROM "dish_ingredient" LEFT JOIN "ingredient" ON "ingredient"."id" = "dish_ingredient"."ingredient_id" ORDER BY "ingredient" ASC) AS "dish_ingredient" ON "dish"."id" = "dish_ingredient"."dish_id" GROUP BY "dish"."id", "difficulty"."id" ORDER BY "dish" ASC;`
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
    console.log('In dishRouter POST request: ', req.body);
    let queryText = `INSERT INTO "dish" ("dish", "recipe_url", "image", "prep_time", "servings", "difficulty_id") VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";`
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN;');
        let result = await connection.query(queryText, [req.body.dish, req.body.recipe_url, req.body.image, req.body.prep_time, req.body.servings || null, req.body.difficulty_id || null])
        let dish_id = result.rows[0].id;
        for (let category of req.body.categories) {
            await connection.query(`INSERT INTO "dish_category" ("dish_id", "category_id") VALUES ($1, $2);`, [dish_id, category.id])
        };
        for (let ingredient of req.body.ingredients) {
            await connection.query(`INSERT INTO "dish_ingredient" ("dish_id", "ingredient_id") VALUES ($1, $2);`, [dish_id, ingredient.id])
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
    console.log('In dishRouter PUT request: ', req.body);
    let queryText = `UPDATE "dish" SET "dish" = $1, "recipe_url" = $2, "image" = $3, "prep_time" = $4, "servings" = $5, "difficulty_id" = $6 WHERE "id" = $7;`
    pool.query(queryText, [req.body.dish, req.body.recipe_url, req.body.image, req.body.prep_time, req.body.servings, req.body.difficulty_id, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In dishRouter DELETE request: ', req.params);
    let queryText = `DELETE FROM "dish" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;