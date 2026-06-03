"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', async (_request, response, next) => {
    try {
        const users = await models_1.User.find().sort({ displayName: 1 }).lean();
        response.json({
            resource: 'users',
            count: users.length,
            items: users,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = usersRouter;
