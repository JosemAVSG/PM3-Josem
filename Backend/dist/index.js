"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const env_1 = __importDefault(require("./config/env"));
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize()
    .then((res) => {
    console.log("Database connected");
    server_1.default.listen(env_1.default, () => {
        console.log(`Server running on port ${env_1.default}`);
    });
})
    .catch((error) => console.log(" Database connection error", error));
