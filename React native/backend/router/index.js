const express = require("express");
const userController = require("../controller/userActionController/userController");
const adminActionController = require("../controller/adminActionController/adminController");
const router = express.Router();
router.use(express.json());
/// user login
router.post("/api/checkuser", userController.userLogin);
/// user sign up
router.post("/api/userRegister", userController.userSignup);
/// get all user accounts
router.get("/api/getAlluser", adminActionController.fetchDataUser);
/// get all food
router.get("/api/getAllfood", adminActionController.fetchDataFood);
/// get food by ID
router.get("/api/getFoodByID/:foodId", userController.getFoodById);
router.get("/api/fetchUserPostById/:userId", userController.fetchuserPostsbyId);
router.get("/api/fetchUserposts", adminActionController.fetchuserPosts);
module.exports = router;
