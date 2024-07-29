const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { swaggerUi, swaggerDocs } = require("./Swagger/swagger.js");
const app = express();
dotenv.config();
const cors = require("cors");
const userroutes = require("./routes/index.js");
const recipe_routes = require("./routes/recipe.js");
const post_routes = require("./routes/post.js");
const cart_routes = require("./routes/cart.js");
const collection_routes = require("./routes/collection.js");
app.use(cors());
app.use(userroutes);
app.use(recipe_routes);
app.use(post_routes);
app.use(cart_routes);
app.use(collection_routes);
///
const uri = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB");
});
//swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//start port
app.listen(8080, () => {
  console.log("Server is running");
});
