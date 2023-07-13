"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWILIO_FROM_NUMBER = exports.TWILIO_AUTH_TOKEN = exports.TWILIO_SID = exports.APP_SECRET = exports.MONGO_URI = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGO_URI = process.env.MONGO_URI;
exports.APP_SECRET = process.env.APP_SECRET;
exports.TWILIO_SID = process.env.TWILIO_SID;
exports.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
exports.TWILIO_FROM_NUMBER = process.env.TWILIO_FROM_NUMBER;
//# sourceMappingURL=index.js.map