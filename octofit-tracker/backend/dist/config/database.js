"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUri = exports.databaseName = void 0;
exports.databaseName = 'octofit_db';
exports.mongoUri = process.env.MONGODB_URI ?? `mongodb://127.0.0.1:27017/${exports.databaseName}`;
