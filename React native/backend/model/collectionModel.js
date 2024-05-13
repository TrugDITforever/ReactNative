const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  ownerId: mongoose.Schema.Types.ObjectId,
  recipeID: [mongoose.Schema.Types.ObjectId],
});

const collectionModel = new mongoose.model("posts", collectionSchema);
module.exports = collectionModel;
