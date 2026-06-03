"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    captain: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 1 },
    weeklyGoalMinutes: { type: Number, required: true, min: 0 },
    motto: { type: String, required: true, trim: true },
}, { timestamps: true });
exports.Team = (0, mongoose_1.model)('Team', teamSchema);
