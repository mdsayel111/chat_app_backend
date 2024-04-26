import cors from 'cors';
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import messageRouter from "./routers/messageRouter";
import conversationRouter from "./routers/conversationRouter";
import cookieParser from "cookie-parser"
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/message", messageRouter)
app.use("/conversation", conversationRouter)
app.get("/", async (req: Request, res: Response) => {
    res.send({ message: "hellow world" })
})

app.listen(port, async () => {
    await mongoose.connect(process.env.DB_URI);
    console.log(`Server is running at ${port}`);
});