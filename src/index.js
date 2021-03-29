// step 01: require the express module.
const express = require("express");

//step 02: create a variable to access all the express funcitonalities.
const app = express();

// step 04: call the router setting up the route:
app.use("/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.status(200).send("Hello Express!");
});

// step 03: declare the port and call the listener.
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
