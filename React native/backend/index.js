const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
app.use(cors());
app.use(router);
app.listen("8080", () => {
  console.log("server is running");
});
