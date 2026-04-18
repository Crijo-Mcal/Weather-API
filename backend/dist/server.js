import express from "express";
import dotenv from "dotenv";
import weatherRouter from "./router/weatherRouter.js";
import { limiter } from "./middleware/rateLimit.js";
import { auth } from "./middleware/auth.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/api', limiter);
app.get('/', (req, res) => {
    res.send('SERVER RUNNING');
});
/* weather router */
app.get('/api/test', (req, res) => {
    res.send('API TEST OK');
});
app.listen(PORT, () => {
    console.log(`sever open on port ${PORT}`);
});
