import dotenv from "dotenv";
dotenv.config();
import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();
export async function setValueOnRedis(locatio, data) {
    await redis.set(locatio, data, { ex: 3600 });
}
export async function getValueOnRedis(location) {
    const data = await redis.get(location);
    return data;
}
export async function checkValueOnRedis(location) {
    const data = await redis.exists(location);
    return data == 1 ? true : false;
}
