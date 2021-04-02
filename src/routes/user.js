// step 01: require the express module.
const express = require("express");

//step 02: create a variable to instantiate the Router.
const router = express.Router();

// step 04: import the middleware.
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  res.status(200).send(`Welcome to the /user path in the user route`);
});

// step 05: add the middleware auth between the route path and the callback for the route.
router.post("/", auth, (req, res) => {
  const { username, password } = req.body;
  res
    .status(200)
    .send(`Welcome ${username} to the /user path in the user route`);
});

// step 03: export the router
module.exports = router;
