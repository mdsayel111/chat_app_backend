"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversations = exports.Messages = exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemas_1 = require("../schemas/schemas");
exports.Users = mongoose_1.default.model('users', schemas_1.userSchema);
exports.Messages = mongoose_1.default.model('messages', schemas_1.messageSchema);
exports.Conversations = mongoose_1.default.model('conversations', schemas_1.conversationSchema);
//# sourceMappingURL=colections.js.map