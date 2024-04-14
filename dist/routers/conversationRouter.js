"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversationControllers_1 = require("../controllers/conversationControllers");
const conversationRouter = express_1.default.Router();
conversationRouter.get("/", conversationControllers_1.getConversation);
conversationRouter.post("/", conversationControllers_1.postConversation);
exports.default = conversationRouter;
//# sourceMappingURL=conversationRouter.js.map