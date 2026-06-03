"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        apiPort: port,
        mongoUri,
    });
});
async function start() {
    try {
        await mongoose_1.default.connect(mongoUri, {
            dbName: 'octofit_db',
        });
        console.log(`MongoDB connected at ${mongoUri}`);
    }
    catch (error) {
        console.warn('MongoDB connection unavailable at startup.', error);
    }
    app.listen(port, '0.0.0.0', () => {
        console.log(`OctoFit backend listening on port ${port}`);
    });
}
void start();
