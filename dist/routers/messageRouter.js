"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageControllers_1 = require("../controllers/messageControllers");
const messageRouter = express_1.default.Router();
messageRouter.post("/", messageControllers_1.postMessage);
exports.default = messageRouter;
//# sourceMappingURL=messageRouter.js.map