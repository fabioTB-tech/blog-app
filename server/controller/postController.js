const uploadToCloudinary = require("../utils/uploadToCloudinary");
const Post = require("../models/Post");

// Post blog
exports.postBlog = async (req, res) => {
  let url;

  try {
    if (req.file) {
      url = await uploadToCloudinary(req.file, "blogs");
    }

    let post = {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      author: req.body.author._id,
      image: {
        url: url ? url : null,
      },
    };

    const newPost = new Post(post);

    if (!newPost) {
      return res.status(400).json({
        message: "Failed creating the post",
      });
    }

    const savedPost = await newPost.save();

    return res.status(200).json({
      message: "Post created successfuly!",
      post: savedPost,
    });
  } catch (err) {
    console.error(err);
  }
};

// Get posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      posts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  const { blog } = req.body;
  try {
    await Post.deleteOne({ _id: blog._id });

    return res.status(200).json({
      message: "Blog deleted successfuly!",
    });
  } catch (err) {
    console.error(err);
  }
};
