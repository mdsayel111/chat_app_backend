import { Request, Response } from "express"
import { Users } from "../DB/collections/colections"

export const getUsers = async (req: Request, res: Response) => {
    const { id } = req.query
    let users
    console.log(id)
    if (id) {
        users = await Users.findById(id)
    } else {
        users = await Users.find()
    }

    res.send({ users: users })
}