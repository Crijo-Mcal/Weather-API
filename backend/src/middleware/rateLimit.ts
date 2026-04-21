import rateLimit from "express-rate-limit";
import { error } from "node:console";

export const limiter = rateLimit({
    max: 60,
    windowMs: 60 * 1000,
    message: { status: 429, err: "Too Many Requests" },
    statusCode: 429
})