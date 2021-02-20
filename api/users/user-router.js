//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import models
const usersModel = require("./user-model");

//* Import Middleware
const getMiddleware = require("../middleware/middleware");

//* Setup Endpoints

//-- GET
// Get all users
router.get("/", getMiddleware.checkIfLoggedIn, (req, res) => {
  usersModel
    .getAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//* Export router
module.exports = router;
