import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import messageRouter from "./routers/messageRouter";
import conversationRouter from "./routers/conversationRouter";
import { Users } from "./DB/collections/colections";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/message", messageRouter)
app.use("/conversation", conversationRouter)
app.get("/", async (req: Request, res: Response) => {
    const { id } = req.query
    let users
    if (id) {
        users = await Users.findById(id)
    } else {
        users = await Users.find()
    }

    res.send({ users: users })
})

app.listen(port, async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@chat-app-db.hk0ts7w.mongodb.net/chat-app-DB?retryWrites=true&w=majority&appName=chat-app-DB`);
    console.log(`Server is running at ${port}`);
});