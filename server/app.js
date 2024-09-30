const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var cors = require("cors");

const app = express();

app.use(cors());

const db = mongoose.connect(
  "mongodb+srv://abbas:B3DBJIBEz6XE4fo4@cluster0.wk3n9v1.mongodb.net/mentalfit?retryWrites=true&w=majority&appName=Cluster0"
);

const port = process.env.PORT || 3000;
const MentalLog = require("./models/mentalLogModel");
const checkAuth = require("./authMIddleWare");
const mentalLogRouter = require("./routes/mentalLogRouter")(MentalLog);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", checkAuth);
app.use("/api", mentalLogRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Nodemon API!");
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
