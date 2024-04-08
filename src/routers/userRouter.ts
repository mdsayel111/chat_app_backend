import express from "express"
import { Users } from "../DB/collections/colections"
import jwt from "jsonwebtoken"


export const userRouter = express.Router()

userRouter.post("/sign_up", async (req, res) => {
    try {
        const userData = req.body
        const newUser = new Users(userData)
        await newUser.save()
        res.send({ message: "user creat successfull" })
    } catch (error) {
        if (error.name === "ValidationError")
            res.status(400).send("some imformaton is missing")
        else res.status(500).send("internal server error")
    }
})

userRouter.post("/sign_in", async (req, res) => {
    try {
        const { userName, password } = req.body
        // check is user exist or not
        const userFromDB = await Users.findOne({ userName })
        if (userFromDB) {
            // check is password match or not
            // TODO: compare bcrypt password with input password
            const isPassMatch = password === userFromDB.password
            if (isPassMatch) {
                const token = jwt.sign({ userName }, process.env.SECRET)
                return res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "none" }).send({ message: "login succesful" })
                // TODO: send event by socket.io for active users
            }
        }
        res.status(400).send({ message: "user name or password is not valid" })
    } catch (error) {
        res.status(500).send("internal server error")
    }
})

userRouter.post("/sign_out", async (req, res) => {
    try {
        const { userName } = req.body
        res.send({ message: "log out succesful" })
        // TODO: send event by socket.io for sign out user
    } catch (error) {
        res.status(500).send("internal server error")
    }
})