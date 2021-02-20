//* Import express and setup server
const express = require("express");
const server = express();

//* Import express session and setup a config obj
const session = require("express-session");

const sessionConfig = {
  name: "monkey",
  secret: "Silence is golden",
  cookie: {
    maxAge: 60 * 60 * 1000,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};

//* Use the session
server.use(session(sessionConfig));

//* Ensure the data return is parsed as JSON
server.use(express.json());

//* Import routers
const usersRouter = require("./users/user-router");
const authRouter = require("./auth/auth-router");

//* Configure routers
server.use("/api/users", usersRouter);
server.use("/api", authRouter);

//* Export Server
module.exports = server;
