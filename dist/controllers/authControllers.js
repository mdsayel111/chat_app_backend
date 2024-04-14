"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.signIn = exports.sighUp = void 0;
const colections_1 = require("../DB/collections/colections");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sighUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = new colections_1.Users(userData);
        yield newUser.save();
        res.send({ message: "user creat successfull" });
    }
    catch (error) {
        if (error.name === "ValidationError")
            res.status(400).send("some imformaton is missing");
        else
            res.status(500).send("internal server error");
    }
});
exports.sighUp = sighUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password } = req.body;
        // check is user exist or not
        const userFromDB = yield colections_1.Users.findOne({ userName });
        if (userFromDB) {
            // check is password match or not
            // TODO: compare bcrypt password with input password
            const isPassMatch = password === userFromDB.password;
            if (isPassMatch) {
                const token = jsonwebtoken_1.default.sign({ userName }, process.env.SECRET);
                return res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "none" }).send({ message: "login succesful" });
                // TODO: send event by socket.io for active users
            }
        }
        res.status(400).send({ message: "user name or password is not valid" });
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.signIn = signIn;
const signOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName } = req.body;
        res.send({ message: "log out succesful" });
        // TODO: send event by socket.io for sign out user
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.signOut = signOut;
//# sourceMappingURL=authControllers.js.map