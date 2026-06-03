"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const workoutsRouter = (0, express_1.Router)();
workoutsRouter.get('/', async (_request, response, next) => {
    try {
        const workouts = await models_1.Workout.find().sort({ difficulty: 1, title: 1 }).lean();
        response.json({
            resource: 'workouts',
            count: workouts.length,
            items: workouts,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = workoutsRouter;
