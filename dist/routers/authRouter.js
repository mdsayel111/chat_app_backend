"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const authControllers_1 = require("../controllers/authControllers");
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/sign_up", authControllers_1.sighUp);
exports.authRouter.post("/sign_in", authControllers_1.signIn);
exports.authRouter.post("/sign_out", authControllers_1.signOut);
//# sourceMappingURL=authRouter.js.map