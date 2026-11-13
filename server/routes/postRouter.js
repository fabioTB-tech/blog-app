const express = require("express");
const router = express.Router();

const { postBlog, getAllBlogs } = require("../controller/postController");
const upload = require("../middleware/multer");

router.post("/post", upload.single("image"), postBlog);
router.get("/blogs", getAllBlogs);

module.exports = router;
