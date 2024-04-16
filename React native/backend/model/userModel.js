const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  _id: String,
  name: String,
  username: String,
  email: String,
  password: String,
  profileImage: String,
  description: String,
  role: Number,
});
const userModel = new mongoose.model("users", Userschema);
module.exports = userModel;
