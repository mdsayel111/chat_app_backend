import { Request, Response } from "express";
import { Conversations, Messages } from "../DB/collections/colections";

export const postMessage = async (req: Request, res: Response) => {
    const { id } = req.query
    const message = req.body
    const conversation = await Conversations.findById(id)
    const newMessage = new Messages(message)
    await newMessage.save()
    await Conversations.updateOne({ _id: id }, {
        messages: [...conversation.messages, newMessage._id]
    })
    res.send({ message: "message send successful" })
}