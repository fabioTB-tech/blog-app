const express = require("express");
const router = express.Router();

const {
  postBlog,
  getAllBlogs,
  deleteBlog,
} = require("../controller/postController");
const upload = require("../middleware/multer");

router.post("/post", upload.single("image"), postBlog);
router.get("/blogs", getAllBlogs);
router.delete("/deleteblog", deleteBlog);

module.exports = router;
