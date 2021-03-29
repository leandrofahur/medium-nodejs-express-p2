// step 01: require the express module.
const express = require("express");

//step 02: create a variable to instantiate the Router.
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`Welcome to the /user path in the user route`);
});

// step 03: export the router
module.exports = router;
