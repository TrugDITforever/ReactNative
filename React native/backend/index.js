const express = require("express");
const app = express();
const cors = require("cors");
const routercheck = require("./router/routecheckSignin");
app.use(cors());
app.use(routercheck);
app.listen("8080", () => {
  console.log("server is running");
});
