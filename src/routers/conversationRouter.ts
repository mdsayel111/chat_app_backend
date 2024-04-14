import express from "express"
import { getConversation, postConversation } from "../controllers/conversationControllers"
const conversationRouter = express.Router()

conversationRouter.get("/", getConversation)
conversationRouter.post("/", postConversation)

export default conversationRouter