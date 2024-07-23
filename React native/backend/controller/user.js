const { ObjectId } = require("mongodb");
const dotenv = require("dotenv");
const foodModel = require("../model/foodModel");
const userModel = require("../model/userModel");
const collectionModel = require("../model/collectionModel");
const jwt = require("jsonwebtoken");
/// user login to app
exports.userLogin = async (req, res) => {
  const state = req.body;
  const email = state.email;
  const password = state.password;
  const my_secret_key = process.env.jwt_token;
  try {
    /// query user in database
    const user = await userModel.findOne({ email: email, password: password });
    if (user) {
      const userData = {
        _id: user._id,
        email: user.email,
        role: user.role,
      };
      const token = jwt.sign(userData, my_secret_key, {
        expiresIn: "3h",
      });
      res.status(200).json({ dataUser: user, success: true, token: token });
    } else {
      res
        .status(400)
        .json({ success: false, error: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
///uesr signup to app
exports.userSignup = async (req, res) => {
  const { fullname, email, password } = req.body;
  const my_secret_key = process.env.jwt_token;
  const profileImage =
    "https://th.bing.com/th/id/OIP.hC6OpIcdstV531Pg7XnT7QHaHa?rs=1&pid=ImgDetMain";
  try {
    // add new user to database
    await userModel.collection.insertOne({
      name: fullname,
      username: "",
      email: email,
      password: password,
      description: "I'm new",
      role: 2,
      profileImage: profileImage,
    });
    // Find user just added to database
    const newUser = await userModel.findOne({ email: email });
    if (newUser) {
      const userData = {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      };
      const token = jwt.sign(userData, my_secret_key, {
        expiresIn: "3h",
      });
      res.status(200).json({ dataUser: newUser, success: true, token: token });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ success: false, error: "Email already existed." });
    }
  }
};
// fetch userposts by id
exports.fetchuserPostsbyId = (req, res) => {
  const state = req.params.userId;
  const ownerId = new ObjectId(`${state}`);
  foodModel
    .aggregate([
      { $match: { ownerId: ownerId } },
      {
        $lookup: {
          from: "users",
          localField: "ownerId",
          foreignField: "_id",
          as: "userpost",
        },
      },
      {
        $project: {
          _id: 1,
          foodName: 1,
          foodImage: 1,
          userpost: {
            _id: 1,
            username: 1,
            profileImage: 1,
          },
        },
      },
      // { $limit: 20 },
    ])
    .then((data) => {
      res.status(200).json({
        postData: data,
      });
    });
};
/// fetch userLikedPost by id
exports.fetchUserLikedPost = (req, res) => {
  const state = req.params.userId;
  const userID = new ObjectId(`${state}`);
  try {
    userModel
      .aggregate([
        { $match: { _id: userID } },
        {
          $unwind: "$liked",
        },
        {
          $lookup: {
            from: "foods",
            localField: "liked",
            foreignField: "_id",
            as: "userpost",
          },
        },
        {
          $project: {
            _id: { $arrayElemAt: ["$userpost._id", 0] },
            foodImage: { $arrayElemAt: ["$userpost.foodImage", 0] },
          },
        },
        // { $limit: 20 },
      ])
      .then((data) => {
        res.status(200).json({
          postData: data,
        });
      });
  } catch (error) {}
};
///user update profile
exports.userUpdateProfile = (req, res) => {
  const state = req.body;
  const stateId = req.params.userid;
  const userid = new ObjectId(`${stateId}`);
  const updatedInfo = {
    name: state.name,
    username: state.username,
    email: state.email,
    profileImage: state.profilePicture,
    description: state.description,
  };
  try {
    userModel
      .findByIdAndUpdate({ _id: userid }, updatedInfo, { new: true })
      .then((user) => {
        res.status(200).json({ dataUser: user, success: true });
      });
  } catch (error) {
    res.status(400).json({ error: "Can't update profile" });
  }
};
///user delete account
exports.userDeleteAccount = (req, res) => {
  const userid = new ObjectId(`${req.params.userid}`);
  try {
    userModel.findByIdAndDelete(req.params.userid).then((user) => {
      res.status(200).json({ deletedUser: user, success: true });
    });
  } catch {
    res.status(400).json({ error: "Can't delete account" });
  }
};

exports.searchingRecipe = async (req, res) => {
  const recipeName = req.query.recipeName;
  try {
    foodModel
      .find({ foodName: { $regex: recipeName, $options: "i" } })
      .then((data) => {
        res.status(200).json({ success: true, results: data });
      });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
