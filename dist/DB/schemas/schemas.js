"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversationSchema = exports.messageSchema = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userSchema = new mongoose_1.default.Schema({
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
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'user'
            }], default: []
    }
}, { timestamps: true });
exports.messageSchema = new mongoose_1.default.Schema({
    senderId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'user'
    },
    message: String
}, { timestamps: true });
exports.conversationSchema = new mongoose_1.default.Schema({
    img: String,
    members: {
        type: [{ type: mongoose_1.default.Types.ObjectId, ref: "users" }],
        required: [true, "members array is missing"]
    },
    messages: {
        type: [{ type: mongoose_1.default.Types.ObjectId, ref: "messages" }],
        default: []
    },
    type: {
        type: String,
        default: null
    },
    name: String
}, { timestamps: true });
exports.userSchema.pre("save", function () {
    this.password = bcrypt_1.default.hashSync(this.password, Number(process.env.SALT_ROUND));
});
//# sourceMappingURL=schemas.js.map