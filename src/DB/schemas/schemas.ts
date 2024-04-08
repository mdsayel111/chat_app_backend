import mongoose from "mongoose";

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

});

export const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    message: String
});

export const conversationSchema = new mongoose.Schema({
    groupImg: String,
    members: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    type: String,
    name: String

});


