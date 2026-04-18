import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    max: 60,
    windowMs: 60 * 1000,
    message: "we have received too many request from this IP, please try after one hour",
    statusCode: 429
})