const express = require("express");
const router = express.Router();

const {
  postBlog,
  getAllPosts,
  deleteBlog,
} = require("../controller/postController");
const upload = require("../middleware/multer");

router.post("/post", upload.single("image"), postBlog);
router.get("/getposts", getAllPosts);
router.delete("/deleteblog", deleteBlog);

module.exports = router;
