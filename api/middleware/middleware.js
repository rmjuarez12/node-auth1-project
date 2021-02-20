const checkIfLoggedIn = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(403).json({ message: "Not logged in" });
  }
};

module.exports = {
  checkIfLoggedIn,
};
