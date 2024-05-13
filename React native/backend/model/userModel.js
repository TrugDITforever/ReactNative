const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  username: String,
  email: String,
  password: String,
  profileImage: String,
  description: String,
  role: Number,
  liked: [mongoose.Schema.Types.ObjectId],
});
const userModel = new mongoose.model("users", Userschema);
module.exports = userModel;
