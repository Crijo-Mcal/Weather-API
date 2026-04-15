import express from "express";
import dotenv from "dotenv";
import apiCall from "./api/api.js";
import redisValidation from "./middleware/redisValidation.js";
import { setveValueOnRedis, getValueOnRedis, checkValueOnRedis } from "./redis/redis.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/data/:location", redisValidation, async (req, res) => {
    const { location } = req.params;
    try {
        if (typeof location !== "string") {
            return res.status(400).json({
                error: "location must be string"
            });
        }
        const dataApiServis = await apiCall(location);
        console.log("take data from api Servis");
        setveValueOnRedis(location, dataApiServis);
        res.json(dataApiServis);
    }
    catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
});
app.listen(PORT, () => {
    console.log(`sever open on port ${PORT}`);
});
