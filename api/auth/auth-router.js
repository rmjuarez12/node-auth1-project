//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import bcrypt
const bcrypt = require("bcryptjs");

//* Import models
const usersModel = require("../users/user-model");

//* Setup endpoints

//-- POST
// Register a new user
router.post("/register", (req, res) => {
  const userData = req.body;

  // Hash the password so the password is not plain text
  const hash = bcrypt.hashSync(userData.password, 10);
  userData.password = hash;

  usersModel
    .addUser(userData)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creating user", error: err });
    });
});

// Login a user
router.post("/login", (req, res) => {
  const loginData = req.body;

  usersModel
    .getByUsername(loginData.username)
    .then((user) => {
      if (user && bcrypt.compareSync(loginData.password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: "Welcome my friend" });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "There was an error login you in", error: err });
    });
});

//-- GET
// Logout a user
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.send("There was an error killing the session");
      } else {
        res.send("Session demolished!");
      }
    });
  } else {
    res.end();
  }
});

//* Export router
module.exports = router;
