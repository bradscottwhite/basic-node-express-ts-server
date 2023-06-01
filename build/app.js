"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users"));
const msgs_1 = __importDefault(require("./msgs"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/users', users_1.default);
app.use('/msgs', msgs_1.default);
app.listen(port, () => {
    console.log(`Connected successfully at port ${port}.`);
});
