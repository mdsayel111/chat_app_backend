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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postConversation = exports.getConversation = void 0;
const colections_1 = require("../DB/collections/colections");
const getConversation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, type } = req.query;
    const conversations = yield colections_1.Conversations.find({ members: id, type });
    res.send({ conversations });
});
exports.getConversation = getConversation;
const postConversation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conversation = req.body;
    const newConversation = new colections_1.Conversations(conversation);
    yield newConversation.save();
    res.send({ message: "conversation creat successful" });
});
exports.postConversation = postConversation;
//# sourceMappingURL=conversationControllers.js.map