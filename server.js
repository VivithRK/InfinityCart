// ! to run command  => npm run server

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();
require("./config/dbconnect");

// !file import

// * routes

const app = express();

// *middlewares
app.use(express.json());

// !server listen
const port = process.env.port || 9000;
app.listen(port, console.log("Server is running on port " + port));
