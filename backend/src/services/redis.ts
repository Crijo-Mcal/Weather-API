import dotenv from "dotenv";
dotenv.config();

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function setRedis(location: string, data: object): Promise<void> {
    await redis.set(location, data, { ex: 1800 });
}

export async function getRedis(location: string): Promise<object | null> {
    const respose = await redis.get(location);

    if (respose) {
        return respose;
    }
    return null
}

export async function checkRedis(location: string): Promise<boolean> {
    const data = await redis.exists(location);
    return data == 1 ? true : false;
}





