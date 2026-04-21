import { Router, type Request, type Response } from "express";
import { getWeatherByLocation } from "../services/apiService.js"
import { getRedis, setRedis, checkRedis } from "../services/redis.js"

export const getWeather = async (req: Request, res: Response) => {
    try {
        const location = req.params.location;

        if (!location || typeof location !== "string") {
            throw { status: 400, message: " require location name and must be string" }
        }

        // Standardize key
        const locationKey = location.toLowerCase().trim();

        /* handle redis */
        const isDataExistOnRedis = await checkRedis(locationKey)
        if (isDataExistOnRedis) {
            const dataRedis = await getRedis(locationKey)
            console.log("take data from redis");
            return res.status(200).json({ susuccess: true, data: dataRedis })
        }

        /* handle servise api weather */
        const serviseData = await getWeatherByLocation(locationKey)
        await setRedis(locationKey, serviseData)
        console.log("take data from servise");
        return res.status(200).json({ susuccess: true, data: serviseData })

    } catch (err: any) {
        return res.status(err.status).json({ success: false, err: { status: err.status, message: err.message } })

    }
}