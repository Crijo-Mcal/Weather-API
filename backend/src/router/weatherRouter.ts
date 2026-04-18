import { Router, type Request, type Response } from "express";
import { setValueOnRedis } from "../redis/redis.js";
import apiCall from "../api/api.js";


const router = Router();

type params = {
    location: string;
}

router.get(
    "/weather/:location", async (req: Request<params>, res: Response) => {
        const location = req.params.location;

        try {

            const dataApiServis = await apiCall(location);

            if (dataApiServis?.err) throw new Error(dataApiServis.err);

            await setValueOnRedis(location, dataApiServis);

            console.log("take data from api service");

            return res.json(dataApiServis);

        } catch (err) {
            const message = err instanceof Error ? err.message : "Unknown error";
            return res.status(400).json({
                err: message,
            });
        }
    }
);

export default router;