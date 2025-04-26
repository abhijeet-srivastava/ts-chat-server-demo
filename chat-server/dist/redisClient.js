"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL || 'redis://redis:6379',
});
redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.connect();
exports.default = redisClient;
