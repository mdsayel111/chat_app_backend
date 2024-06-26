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
exports.postMessage = void 0;
const colections_1 = require("../DB/collections/colections");
const postMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const message = req.body;
    const conversation = yield colections_1.Conversations.findById(id);
    const newMessage = new colections_1.Messages(message);
    yield newMessage.save();
    yield colections_1.Conversations.updateOne({ _id: id }, {
        messages: [...conversation.messages, newMessage._id]
    });
    res.send({ message: "message send successful" });
});
exports.postMessage = postMessage;
//# sourceMappingURL=messageControllers.js.map