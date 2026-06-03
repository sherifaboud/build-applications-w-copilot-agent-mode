"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const activitiesRouter = (0, express_1.Router)();
activitiesRouter.get('/', async (_request, response, next) => {
    try {
        const activities = await models_1.Activity.find().sort({ activityDate: -1 }).lean();
        response.json({
            resource: 'activities',
            count: activities.length,
            items: activities,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = activitiesRouter;
