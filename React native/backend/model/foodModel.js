const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  id: String,
  foodName: String,
  foodImage: String,
  mealType: String,
  calories: Number,
  level: String,
  serves: Number,
  description: String,
  ingredients: [String],
  instructions: String,
});

const foodModel = new mongoose.model("foods", foodSchema);
module.exports = foodModel;
