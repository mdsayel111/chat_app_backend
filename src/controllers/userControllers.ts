import { Request, Response } from "express"
import { Users } from "../DB/collections/colections"

export const getUsers = async (req: Request, res: Response) => {
    const { id } = req.query
    let users
    if (id) {
        users = await Users.findById(id)
    } else {
        users = await Users.find()
        console.log("find done")
    }

    res.send({ users: users })
}