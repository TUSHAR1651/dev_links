import express from "express";
import rateLimit from "express-rate-limit";
import authRouter from "./router/auth";
import cors from "cors";

import connectDB from "./utils/mongoose";
import userRouter from "./router/user";
import themeRouter from "./router/theme";

const app = express();

app.use(cors());
app.use(express.json());

// const limiter = rateLimit({
//   windowMs: 60 * 60 * 1000,
//   max: 100,
//   message: "Too many requests from this IP, please try again in an hour",
// });

// app.use("/", limiter);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/theme", themeRouter);

connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));
