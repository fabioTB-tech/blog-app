const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: {
    type: String,
    require: true,
    select: false,
    minLength: [8, "Password should be greater then 8 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", userSchema);
