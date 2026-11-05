const express = require("express");
require("dotenv").config();

const { registerUser } = require("../controller/auth.js");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
