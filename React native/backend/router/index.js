const express = require("express");
const userController = require("../controller/userActionController/userController");
const adminActionController = require("../controller/adminActionController/adminController");
const router = express.Router();
router.use(express.json());
/// user login
router.post("/api/checkuser", userController.userLogin);
/// user sign up
router.post("/api/userRegister", userController.userSignup);
/// user update information
router.put("/api/updateinfo/:userid", userController.userUpdateProfile);
/// user delete their own account
router.delete("/api/deleteAccount/:userid", userController.userDeleteAccount);
/// get all user accounts
router.get("/api/getAlluser", adminActionController.fetchDataUser);
/// get all food
router.get("/api/getAllfood/:mealType", adminActionController.fetchDataFood);
/// get food by ID
router.get("/api/getFoodByID/:foodId", userController.getFoodById);
/// fetch user posts base on user ID
router.get("/api/fetchUserPostById/:userId", userController.fetchuserPostsbyId);
/// fetch user liked posts based on ID
router.get(
  "/api/fetchUserLikedPostById/:userId",
  userController.fetchUserLikedPost
);
/// get all post belong to user
router.get("/api/fetchUserposts", adminActionController.fetchuserPosts);
/// user create a new recipe
router.post("/api/createRecipe", userController.userpostRecipe);
/// user update their recipe
router.put("/api/updateRecipe/:foodid", userController.userUpDatepostRecipe);
/// user delete their recipe
router.delete("/api/deleteRecipe/:foodid", userController.userDeleteRecipe);
/// user like recipe -> add to like attribute
router.put("/api/likeRecipe/:userid", userController.userLikesRecipe);
/// check is like recipe
router.get("/api/checklikeRecipe/:userid", userController.checkisLiked);
module.exports = router;
