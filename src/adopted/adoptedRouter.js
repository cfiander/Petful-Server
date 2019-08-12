const express = require('express');
const AdoptedService = require('./adopted-service');

const adoptedRouter = express.Router();

adoptedRouter.route('/')
    .get((req, res, next) => {
        const adopted = AdoptedService.getAdoptedAnimals();
        if (!adopted) {
            return res
                .status(400)
                .json({ error: "No one has been adopted yet. The world is a horrible place." });
        }
        return res.json(adopted);
    })

module.exports = adoptedRouter;