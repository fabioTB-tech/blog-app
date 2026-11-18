const express = require("express");
require("dotenv").config();

const { isAuthenticatedUser } = require("../middleware/auth.js");
const {
  registerUser,
  loginUser,
  getUserDetails,
  getAllUsers,
  logout,
} = require("../controller/userController.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/me/:token", isAuthenticatedUser, getUserDetails);
router.get("/users", getAllUsers);

module.exports = router;
