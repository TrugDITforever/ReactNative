const express = require("express");
const { checkUserSignin } = require("../controller/UserSigninController");
const { getUser } = require("../controller/getUserController");
const router = express.Router();
router.use(express.json());
router.post("/v1/checkuser", checkUserSignin);
router.use("/v1/getuser", getUser);

module.exports = router;
