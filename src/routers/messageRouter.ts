import express from "express"
import { postMessage } from "../controllers/messageControllers"

const messageRouter = express.Router()

messageRouter.post("/", postMessage)

export default messageRouter