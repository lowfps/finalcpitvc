"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cpitvc_ingeniero_1 = __importDefault(require("../controllers/cpitvc_ingeniero"));
class IngenieroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idIngeniero', cpitvc_ingeniero_1.default.getIngenieroId);
    }
}
const ingenieroRoutes = new IngenieroRoutes();
exports.default = ingenieroRoutes.router;
