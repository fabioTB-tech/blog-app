const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/User.js");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    // const users = await User.find();
    // console.log(users);
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists, please make the Login.",
      });
    }

    /*
      The password should NOT be saved directly on database.
      Instead we should hash the password and save the
      encrypted password, for the login we can just compare
      the two passwords passed.
    */
    // Firts generate the salt and then hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt); // this is the hashed password, which will be saved on DB

    const newUser = new User({ username, email, password: hash });
    const savedUser = await newUser.save();

    return res.status(200).json({
      message: "User registered successfuly!",
    });
  } catch (err) {
    return res.status(500).json({
      message: `Message: ${err.message}`,
    });
  }
};

module.exports = { registerUser };
