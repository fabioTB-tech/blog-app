const express = require("express");
require("dotenv").config();

const { isAuthenticatedUser } = require("../middleware/auth.js");
const {
  registerUser,
  loginUser,
  getUserDetails,
} = require("../controller/userController.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me/:token", isAuthenticatedUser, getUserDetails);

module.exports = router;
