const express = require("express");
const userController = require("../controller/userActionController/userController");
const adminActionController = require("../controller/adminActionController/adminController");
const router = express.Router();
router.use(express.json());
/// get all user account
router.get("/api/admin/getUserAccount", adminActionController.fetchDataUser);

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
/// fetch user collection
router.get("/api/fetchCollections/:userid", userController.fetchCollections);
/// user create a new collection
router.post("/api/createCollection/:userid", userController.createCollection);
/// user add a recipe to selected collection
router.put("/api/addRecipetoCollection/:userid", userController.addCollection);
/// checkif user added recipe to any collection or not
router.get(
  "/api/checkIsaddedtoCollection/:userid",
  userController.checkisdaddedtoCollection
);
/// fetching recipe in collection
router.get(
  "/api/fetchRecipeByCollectionID/:collectionID",
  adminActionController.fetchRecipeByCollectionID
);
/// searching results
router.get("/api/searchRecipe", userController.searchingRecipe);
/// fetching all courses
router.get("/api/fetchingCourses", adminActionController.fetchCourses);
/// check is add to cart
router.get("/api/checkIsAddToCart/:userid", userController.checkisdaddedtoCart);
/// user add to cart
router.put("/api/addCourse/:userid", userController.userAddCoursetoCart);
router.get("/api/fetchShoppingCart/:userid", userController.fetchUserCart);
router.put("/api/checkoutPayment/:userid", userController.checkoutPayment);
router.get("/api/fetchInvoices/:userid", userController.fetchInvoices);
///fetch course by ID
router.get(
  "/api/fetchCoursebyID/:courseID",
  adminActionController.fetchCourseByID
);
module.exports = router;
