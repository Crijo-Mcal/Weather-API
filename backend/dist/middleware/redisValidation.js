import { setveValueOnRedis, getValueOnRedis, checkValueOnRedis } from "../redis/redis.js";
export default async function redisValidation(req, res, next) {
    const { location } = req.params;
    try {
        if (typeof location !== "string") {
            res.status(400).json({
                error: "location must be string"
            });
            return;
        }
        const dataExistsInRadis = await checkValueOnRedis(location);
        if (dataExistsInRadis) {
            const dataRedis = await getValueOnRedis(location);
            console.log("take data from radis");
            res.json(dataRedis);
            return;
        }
        next();
    }
    catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}
