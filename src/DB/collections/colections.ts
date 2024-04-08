import mongoose from "mongoose";
import { conversationSchema, messageSchema, userSchema } from "../schemas/schemas";


export const Users = mongoose.model('users', userSchema);

export const Messages = mongoose.model('messages', messageSchema);

export const Conversations = mongoose.model('conversations', conversationSchema);