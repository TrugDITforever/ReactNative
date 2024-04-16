const { ObjectId } = require("mongodb");
const foodModel = require("../../model/foodModel");
const userModel = require("../../model/userModel");


/// show food deatails when user click on
exports.getFoodById = (req, res) => {
  const state = req.params.foodId;
  console.log(state);
  const foodId = new ObjectId(`${state}`);
  try {
    /// query find food by _id
    foodModel.findOne({ _id: foodId }).then((food) => {
      res.status(200).json({ foodData: food });
    });
  } catch (err) {
    throw new Error(err);
  }
};
/// user login to app
exports.userLogin = async (req, res) => {
  const state = req.body;
  const email = state.email;
  const password = state.password.toString();
  try {
    /// query user in database
    const user = await userModel.findOne({ email: email, password: password });
    if (user) {
      res.status(200).json({ dataUser: user, success: true });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
