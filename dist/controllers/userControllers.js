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
exports.getUsers = void 0;
const colections_1 = require("../DB/collections/colections");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    let users;
    if (id) {
        users = yield colections_1.Users.findById(id);
    }
    else {
        console.log("before find");
        users = yield colections_1.Users.find();
        console.log("after find");
    }
    res.send({ users: users });
});
exports.getUsers = getUsers;
//# sourceMappingURL=userControllers.js.map