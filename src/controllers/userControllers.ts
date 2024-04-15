import { Request, Response } from "express"
import { Users } from "../DB/collections/colections"

export const getUsers = async (req: Request, res: Response) => {
    const { id } = req.query
    let users
    if (id) {
        users = await Users.findById(id)
    } else {
        console.log("before find")
        users = await Users.find()
        console.log("after find")
    }

    res.send({ users: users })
}