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
///Testing API Keys

// const openai = require("openai");

// const DALL_E_API_KEY =
//   // "sk-None-x9DcIjhKUY0XgkhAIkp0T3BlbkFJA3KXtPkS6yF5HI8MgkRZ";
//   "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";
// app.post("/generate-image", async (req, res) => {
//   const { description } = req.body;
//   console.log(description);
//   try {
//     const response = await axios.post(
//       "https://api-inference.huggingface.co/models/Kaludi/food-category-classification-v2.0",
//       {
//         body: "pasta.jpg",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${DALL_E_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(response);
//     res.status(200).json({ imageUrl: response.data[0].generated_image_url });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
//swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//start port
app.listen(8080, () => {
  console.log("Server is running");
});
