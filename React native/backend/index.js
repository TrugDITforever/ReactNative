const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(router);
const uri = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB");
});
app.listen(8080, () => {
  console.log("Server is running");
});
