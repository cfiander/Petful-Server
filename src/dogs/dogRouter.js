const express = require('express');
const DogsService = require('./dogs-service');

const dogsRouter = express.Router();

dogsRouter
    .route('/')
    .get((req, res, next) => {
        const dogs = DogsService.getDogs();
        if (!dogs) {
            return res
                .status(400)
                .json({ error: "There are no dogs available to adopt right now. Why not try a cat?" });
        }
        return res.json(dogs);
    })
    .delete((req, res, next) => {
        const dogs = DogsService.dequeueDog()
        if (!dogs) {
            return res
                .status(400)
                .json({
                    error: "You're trying to delete dogs that dont' exist"
                })
        }
        return res.json(dogs)
    })

dogsRouter
    .route('/inline')
    .get((req, res, next) => {
        const dogs = DogsService.getDogs();
        if (!dogs) {
            return res
                .status(400)
                .json({ error: "There are no dogs in line" });
        }
        return res.json(dogs);
    })


module.exports = dogsRouter;