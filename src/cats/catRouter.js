const express = require('express');
const CatsService = require('./cats-service');

const catsRouter = express.Router();

catsRouter
    .route('/')
    .get((req, res, next) => {
        const cats = CatsService.getCats();
        if (!cats) {
            return res
                .status(400)
                .json({ error: "We have no cats to adopt. Maybe consider a dog" });
        }
        return res.json(cats);
    })
    .delete((req, res, next) => {
        const cats = CatsService.dequeueCat();
        if (!cats) {
            return res.status(400).json({
                error: "Why do you hate cats Karen? Well thankfully there's none for you to 'remove' right now."
            });
        }
        return res.json(cats);
    });

catsRouter
    .route('/inline')
    .get((req, res, next) => {
        const cats = CatsService.getCats();
        if (!cats) {
            return res
                .status(400)
                .json({ error: "There are no cats in line" });
        }
        return res.json(cats);
    })

module.exports = catsRouter;