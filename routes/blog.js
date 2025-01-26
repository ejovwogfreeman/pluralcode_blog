const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImg,
} = require("../controllers/blog");

// POST route to add a blog
router.post("/create", createBlog);

// GET route to get all the blogs
router.get("/", getBlogs);

// GET route to get a single blog
router.get("/blog/:id", getBlog);

// PUT route to update a single blog
router.put("/update/:id", updateBlog);

// DELETE route to delete a single blog
router.delete("/delete/:id", deleteBlog);

// POST route to upload image
router.post("/upload-img", uploadImg);

module.exports = router;
