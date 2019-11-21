const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

randomNumber = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', (req, res) => {
    console.log('In dishRouter GET request');
    let queryText = `SELECT "dish"."id", "dish", "recipe_url", "image", "prep_time", "servings", "difficulty_id", "difficulty" FROM "dish" JOIN "difficulty" ON "difficulty"."id" = "dish"."difficulty_id" ORDER BY "dish" ASC;`
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
    let queryText = `SELECT "dish"."id", "dish", "recipe_url", "image", "prep_time", "servings", "difficulty_id", "difficulty" FROM "dish" JOIN "difficulty" ON "difficulty"."id" = "dish"."difficulty_id";`
    pool.query(queryText)
        .then((result) => {
            let randomizeMe = randomNumber(0, (Number(result.rows.length)) - 1);
            res.send(result.rows[randomizeMe]);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('In dishRouter POST request: ', req.body);
    let queryText = `INSERT INTO "dish" ("dish", "recipe_url", "image", "prep_time", "servings", "difficulty_id") VALUES ($1, $2, $3, $4, $5, $6);`
    pool.query(queryText, [req.body.dish, req.body.recipe_url, req.body.image, req.body.prep_time, req.body.servings || null, req.body.difficulty_id || null])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
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