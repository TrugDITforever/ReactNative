const usermodel = require("../../model/userModel");
const foodModel = require("../../model/foodModel");
const postModel = require("../../model/postModel");
const { ObjectId } = require("mongodb");
/// get all user information
exports.fetchDataUser = (req, res) => {
  usermodel.find().then((user) => {
    res.status(200).json({
      UserData: user,
    });
  });
};
/// get all food information base on mealType
exports.fetchDataFood = (req, res) => {
  const state = req.params;
  foodModel.find({ mealType: state.mealType }).then((food) => {
    res.status(200).json({ foodData: food });
  });
};
/// get all post of user
exports.fetchuserPosts = (req, res) => {
  const ownerId = new ObjectId("66146d7338795a648ebee702");
  foodModel
    .aggregate([
      { $match: {} },
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
      { $limit: 10 },
    ])
    .then((data) => {
      res.status(200).json({
        postData: data,
      });
    });
};
