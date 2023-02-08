//dependencies
const express = require("express");
const cors = require("cors");

//configuration
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Doggie Central- all things dog related");
});

app.get("*", (req, res) => {
  res.status(404).json("Are you a lost dog?");
});

//export
module.exports = app;
