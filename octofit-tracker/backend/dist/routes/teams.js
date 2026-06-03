"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const teamsRouter = (0, express_1.Router)();
teamsRouter.get('/', async (_request, response, next) => {
    try {
        const teams = await models_1.Team.find().sort({ name: 1 }).lean();
        response.json({
            resource: 'teams',
            count: teams.length,
            items: teams,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = teamsRouter;
