import { Request, Response } from "express"
import { Users } from "../DB/collections/colections"

export const getUsers = async (req: Request, res: Response) => {
    const cookies = req.cookies
    console.log(cookies)
    const { id } = req.query
    let users
    if (id) {
        users = await Users.findById(id)
    } else {
        users = await Users.find()
    }

    res.send({ users: users })
}