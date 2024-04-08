import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRouter } from "./routers/userRouter";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/user", userRouter)

app.listen(port, async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@chat-app-db.hk0ts7w.mongodb.net/chat-app-DB?retryWrites=true&w=majority&appName=chat-app-DB`);
    console.log(`Server is running at ${port}`);
});