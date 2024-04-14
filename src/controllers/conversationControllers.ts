import { Request, Response } from "express"
import { Conversations } from "../DB/collections/colections"

export const getConversation = async (req: Request, res: Response) => {
    const { id, type } = req.query
    const conversations = await Conversations.find({ members: id, type })
    res.send({ conversations })
}

export const postConversation = async (req: Request, res: Response) => {
    const conversation = req.body
    const newConversation = new Conversations(conversation)
    await newConversation.save()
    res.send({ message: "conversation creat successful" })
}