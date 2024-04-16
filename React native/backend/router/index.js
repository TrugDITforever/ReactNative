const express = require("express");
const userController = require("../controller/userActionController/userController");
const adminActionController = require("../controller/adminActionController/adminController");
const router = express.Router();
router.use(express.json());
router.post("/v1/checkuser", userController.userLogin);
router.get("/v1/getAlluser", adminActionController.fetchDataUser);
router.get("/v1/getAllfood", adminActionController.fetchDataFood);
router.get("/v1/getFoodByID/:foodId", userController.getFoodById);
router.get("/v1/fetchUserposts", adminActionController.fetchuserPosts);
module.exports = router;
        