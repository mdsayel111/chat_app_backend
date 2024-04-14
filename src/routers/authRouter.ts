import express from "express"
import { sighUp, signIn, signOut } from "../controllers/authControllers"


export const authRouter = express.Router()

authRouter.post("/sign_up", sighUp)

authRouter.post("/sign_in", signIn)

authRouter.post("/sign_out", signOut)