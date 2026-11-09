const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.params;

  if (!token || token === null) {
    return res.status(401).json({
      message: "Please login to access this resource",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById({ _id: decoded.id });

  next();
};
