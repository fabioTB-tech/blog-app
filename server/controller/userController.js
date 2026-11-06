const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists, please make the Login.",
      });
    }

    /**
     * The password should NEVER be saved directly on database.
     * Instead we should hash the password and save the
     * encrypted password, for the login we can just compare
     * the two passwords passed.
     */
    // First, generate the salt and then hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt); // this is the hashed password, which will be saved on DB

    const newUser = new User({ username, email, password: hash });
    const savedUser = await newUser.save();

    return res.status(200).json({
      user: savedUser,
      message: "User registered successfuly!",
    });
  } catch (err) {
    return res.status(500).json({
      message: `Message: ${err.message}`,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter E-mail & Password",
      });
    }

    const user = await User.findOne({ email }).select("+password");
    const isUser = bcrypt.compareSync(password, user.password);

    if (!user || !isUser) {
      return res.status(401).json({
        message: "Invalid e-email or password.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({
      message: "You logged in successfully!",
      user,
      token,
    });
  } catch (err) {
    return res.status(500).json({
      message: `Message: ${err}`,
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user._id });

    return res.status(200).json({
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server side error.",
    });
  }
};
