"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore 
const database_1 = __importDefault(require("./util/database"));
const cors = require("cors");
const app = (0, express_1.default)();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
database_1.default
    .sync({ force: true })
    // .sync()
    .then((result) => {
    console.log(result);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
})
    .catch((error) => {
    console.log(error);
});
