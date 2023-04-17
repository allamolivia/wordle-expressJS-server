"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000; // Allow dynamic PORT setting (Heroku)
// Define GET endpoint(s)
const possibleWords = ["Apple", "Bases", "Birds", "Crowd", "Crack", "Delta", "Doubt", "Dough", "Flyer", "Grand",
    "Giant", "Hello", "Handy", "Igloo", "Karat", "Kayak", "Leeds", "Leary", "Matte", "Never",
    "Outgo", "Plate", "Pours", "Queue", "Rowdy", "Slack", "Showy", "These", "Utter", "Vases",
    "Weird", "Xenon", "Yards", "Zeros"];
app.use((0, cors_1.default)());
app.get("/randomword", (req, res) => {
    res.send({ secret: possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase() });
});
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
