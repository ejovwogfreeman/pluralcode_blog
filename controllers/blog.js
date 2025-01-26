const fileUpload = require("../config/fileUpload");
const Blog = require("../models/blog");
// const { createBlogMail } = require("../config/email.js");

const createBlog = async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;

    if (!title || !content) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newBlog = new Blog({
      title,
      content,
    });

    // save blog to database
    const savedBlog = await newBlog.save();

    // sendMail
    // createBlogMail("ejovwogfreeman007@gmail.com");
    res
      .status(200)
      .json({ message: "Blog created successfully", blog: savedBlog });
  } catch (err) {
    res.status(500).json({ message: "an error occured", err });
  }
};

// get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "an error occured", err });
  }
};

// get a single blog
const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(400).json({ message: "blog not found", err });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: "an error occured", err });
  }
};

const updateBlog = async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const id = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
      res.status(400).json({ message: "blog not found", err });
    }
    if (title) {
      blog.title = title;
    }

    if (content) {
      blog.content = content;
    }

    const updatedBlog = await blog.save();
    res
      .status(200)
      .json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (err) {
    res.status(500).json({ message: "an error occured", err });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      res.status(400).json({ message: "blog not found", err });
    }
    res.status(200).json({ message: "blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "an error occured", err });
  }
};

const uploadImg = async (req, res) => {
  try {
    if (req.files) {
      const uploadRes = await fileUpload(req.files.image);
      console.log(uploadRes);
      res.send(uploadRes);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImg,
};
