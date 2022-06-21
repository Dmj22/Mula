const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var uri= "mongodb+srv://dmj22:EwYCZ2oUvmg8E2FH@mula.u80udg2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlPasrser: true});
var db = mongoose.connection;

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});