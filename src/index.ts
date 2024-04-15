import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import messageRouter from "./routers/messageRouter";
import conversationRouter from "./routers/conversationRouter";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/message", messageRouter)
app.use("/conversation", conversationRouter)
app.get("/", async (req: Request, res: Response) => {
    res.send({ message: "hellow world" })
})

app.listen(port, async () => {
    await mongoose.connect("mongodb+srv://mdsayel111:DdxSBntwqzuYkxJw@cluster0.yl5wqq8.mongodb.net/chat-app-DB-2?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Server is running at ${port}`);
});