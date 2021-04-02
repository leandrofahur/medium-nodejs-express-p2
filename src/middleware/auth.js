const auth = function (req, res, next) {
  const { username, password } = req.body;

  if (username === "john" && password === "doe") {
    next();
  }

  res.json({ message: "Authentication failed!" });
};

module.exports = auth;
