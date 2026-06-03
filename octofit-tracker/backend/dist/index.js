"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiBaseUrl_1 = require("./config/apiBaseUrl");
const database_1 = require("./config/database");
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const teams_1 = __importDefault(require("./routes/teams"));
const users_1 = __importDefault(require("./routes/users"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', users_1.default);
app.use('/api/teams', teams_1.default);
app.use('/api/activities', activities_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
app.use('/api/workouts', workouts_1.default);
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        apiPort: apiBaseUrl_1.port,
        apiBaseUrl: apiBaseUrl_1.apiBaseUrl,
        mongoUri: database_1.mongoUri,
    });
});
async function start() {
    try {
        await (0, database_1.connectToDatabase)();
        console.log(`MongoDB connected at ${database_1.mongoUri}`);
    }
    catch (error) {
        console.warn('MongoDB connection unavailable at startup.', error);
    }
    app.listen(apiBaseUrl_1.port, '0.0.0.0', () => {
        console.log(`OctoFit backend listening at ${apiBaseUrl_1.apiBaseUrl}`);
    });
}
void start();
