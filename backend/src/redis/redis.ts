import dotenv from "dotenv";
dotenv.config();

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function setveValueOnRedis(locatio: string, data: string): Promise<void> {
    await redis.set(locatio, data, { ex: 3600 });
}

export async function getValueOnRedis(location: string): Promise<any> {
    const data = await redis.get(location);
    return data;
}

export async function checkValueOnRedis(location: string): Promise<boolean> {
    const data = await redis.exists(location);
    return data == 1 ? true : false;

}





