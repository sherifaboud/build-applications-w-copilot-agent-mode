"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const leaderboardRouter = (0, express_1.Router)();
leaderboardRouter.get('/', async (_request, response, next) => {
    try {
        const leaderboard = await models_1.LeaderboardEntry.find().sort({ rank: 1 }).lean();
        response.json({
            resource: 'leaderboard',
            count: leaderboard.length,
            items: leaderboard,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = leaderboardRouter;
