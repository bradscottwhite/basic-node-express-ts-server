"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users = {
    'bradwht': { rank: 'jr' },
    'carwht': { rank: 'jr' },
    'floren': { rank: 'sr' }
};
// Router calls for CRUD user API:
router.get('/:id', (req, res) => {
    let id = String(req.params.id);
    if (users[id])
        res.send(users[id]);
    else
        res.send(`Could not find user ${id}.`);
});
router.get('', (req, res) => {
    res.send(users);
});
router.post('/:id', (req, res) => {
    let id = String(req.params.id);
    let user = req.body;
    users[id] = user;
    res.send(`User ${id} added.`);
});
router.put('/:id', (req, res) => {
    let id = String(req.params.id);
    let user = req.body;
    users[id] = user;
    res.send(`User ${id} updated.`);
});
router.delete('/:id', (req, res) => {
    let id = String(req.params.id);
    delete users[id];
    res.send(`User ${id} deleted.`);
});
exports.default = router;
