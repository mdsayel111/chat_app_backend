import mongoose from "mongoose";
import bcrypt from "bcrypt"

export const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: [true, "this username already in use"],
        required: [true, "user name must be required"]
    },
    fullName: { type: String, required: [true, "full name must be required"] },
    profilePic: { type: String, required: [true, "profile pic must be required"] },
    password: { type: String, required: [true, "password must be required"] },
    friends: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }], default: []
    }

}, { timestamps: true });

export const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    message: String
}, { timestamps: true });

export const conversationSchema = new mongoose.Schema({
    img: String,
    members: {
        type: [{ type: mongoose.Types.ObjectId, ref: "users" }],
        required: [true, "members array is missing"]
    },
    messages: {
        type: [{ type: mongoose.Types.ObjectId, ref: "messages" }],
        default: []
    },
    type: {
        type: String,
        default: null
    },
    name: String

}, { timestamps: true });


userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, Number(process.env.SALT_ROUND));
})