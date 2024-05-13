const { ObjectId } = require("mongodb");
const dotenv = require("dotenv");
const foodModel = require("../../model/foodModel");
const userModel = require("../../model/userModel");
const jwt = require("jsonwebtoken");

// / show food deatails when user click on
exports.getFoodById = (req, res) => {
  const state = req.params.foodId;
  const foodId = new ObjectId(`${state}`);
  try {
    /// query find food by _id
    foodModel.findById({ _id: foodId }).then((food) => {
      res.status(200).json({ foodData: food, success: true });
    });
  } catch (err) {
    throw new Error(err);
  }
};
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

/// fetch userposts by id
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
/// this is for user to post recipe
/// insert into database then  create new recipe
exports.userpostRecipe = (req, res) => {
  const state = req.body;
  const newRecipe = new foodModel({
    foodName: state.foodName,
    foodImage: state.foodImage,
    description: state.description,
    ingredients: state.ingredients,
    instructions: state.instructions,
    ownerId: new ObjectId(`${state.ownerId}`),
  });
  try {
    newRecipe.save().then((newfood) => {
      res.status(200).json({ newRecipe: newfood, success: true });
    });
  } catch (error) {
    res.status(400).json({ error: "Can't create recipe" });
  }
};
/// user update their recipe
exports.userUpDatepostRecipe = (req, res) => {
  const state = req.body;
  const foodid = req.params.foodid;
  const updateRecipe = {
    foodName: state.foodName,
    foodImage: state.foodImage,
    description: state.description,
    ingredients: state.ingredients,
    instructions: state.instructions,
  };
  try {
    foodModel
      .findByIdAndUpdate({ _id: foodid }, updateRecipe, { new: true })
      .then((newfood) => {
        res.status(200).json({ newRecipe: newfood, success: true });
      });
  } catch (error) {
    res.status(400).json({ error: "Can't update recipe" });
  }
};
/// user delete their recipe
exports.userDeleteRecipe = (req, res) => {
  const id = req.params.foodid;
  try {
    foodModel.findByIdAndDelete(id).then((food) => {
      res.status(200).json({ deletedRecipe: food, success: true });
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
/// user add a new recipe to their likes
///check if user liked it or not
exports.userLikesRecipe = async (req, res) => {
  const userId = req.params.userid;
  const foodId = req.body.recipeId;
  try {
    const isliked = await userModel.findOne({
      _id: userId,
      liked: foodId,
    });
    if (isliked) {
      userModel
        .findByIdAndUpdate(userId, {
          $pull: { liked: new ObjectId(`${foodId}`) },
        })
        .then((food) => {
          res.status(200).json({ success: false, removed: foodId });
        });
    } else {
      userModel
        .findByIdAndUpdate(userId, {
          $push: { liked: new ObjectId(`${foodId}`) },
        })
        .then((food) => {
          res.status(200).json({ success: true, added: foodId });
        });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
///
exports.checkisLiked = async (req, res) => {
  const userId = req.params.userid;
  const foodId = req.query.recipeId;
  try {
    const data = await userModel.findOne({ _id: userId, liked: foodId });
    if (data) {
      res.status(200).json({ success: true, exist: true });
    } else {
      res.status(200).json({ success: true, exist: false });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
/// fetching user liked recipe
