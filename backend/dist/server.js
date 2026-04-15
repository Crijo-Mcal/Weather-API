import express from "express";
import dotenv from "dotenv";
import weatherRouter from "./router/weatherRouter.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
/* weather router */
app.use('/api', weatherRouter);
app.listen(PORT, () => {
    console.log(`sever open on port ${PORT}`);
});
