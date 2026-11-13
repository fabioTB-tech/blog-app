const cloudinary = require("../config/cloudinary");

exports.postBlog = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required.",
      });
    }
    await cloudinary.uploader
      .upload(req.file.path, { folder: "blogs" })
      .then((result) => console.log(result));
  } catch (err) {
    console.error(err);
  }
};

exports.getAllBlogs = async (req, res) => {
  res.json({ message: "Hello" });
};
