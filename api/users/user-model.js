//* Import the DB config
const db = require("../../data/db-config");

//* Get all users
function getAll() {
  return db("users");
}

//* Get user by ID
function getByID(id) {
  return db("users").where({ id }).first();
}

//* Get user by Username
function getByUsername(username) {
  return db("users").where({ username }).first();
}

//* Create a new user entry
function addUser(user) {
  return db("users")
    .insert(user)
    .then((id) => {
      return getByID(id);
    });
}

//* Export functions
module.exports = {
  getAll,
  addUser,
  getByUsername,
};
