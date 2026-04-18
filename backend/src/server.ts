import express from "express";
import dotenv from "dotenv";
import weatherRouter from "./router/weatherRouter.js";
import { limiter } from "./middleware/rateLimit.js";
import { auth } from "./middleware/auth.js"
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api', limiter, auth);

/* weather router */
app.use('/api', weatherRouter)


app.listen(PORT, () => {
  console.log(`sever open on port ${PORT}`);
});
