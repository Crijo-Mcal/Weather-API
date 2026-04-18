import type { Request, Response, NextFunction } from "express"
import dotenv from "dotenv";

dotenv.config();

export function auth(req: Request, res: Response, next: NextFunction) {
    const key = req.query.key

    if (typeof key !== "string") {
        return res.status(400).json({ err: "API key missing" });
    }

    if (key !== process.env.FRONTEND_API_KEY) {
        return res.status(404).json({ err: "invali api key" })
    }

    next();

}