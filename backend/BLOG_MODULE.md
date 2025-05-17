# 📝 Blog Module for Express + MongoDB Backend (ES Modules)

This module provides a comprehensive setup for managing blog posts in a Node.js + Express + MongoDB project using modern ES Modules syntax. It includes the **Blog model**, **controller functions**, and **routes** for creating and retrieving blog posts.

---

## 📁 1. Blog Model: `models/Blog.js`

Defines the schema for blog posts, including fields for title, body, author, and an optional image URL.

```js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Optional image URL
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
```

---

## 📁 2. Blog Controller: `controllers/blogController.js`

Implements the logic for handling blog-related operations, such as fetching all blog posts and creating new ones.

```js
import Blog from "../models/Blog.js";

// @desc    Get all blog posts
// @route   GET /api/blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create a new blog post
// @route   POST /api/blogs
export const createBlog = async (req, res) => {
  const { title, body, author, image } = req.body;

  try {
    const blog = new Blog({
      title,
      body,
      author,
      image,
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog post" });
  }
};
```

---

## 📁 3. Blog Routes: `routes/blogRoutes.js`

Defines the API endpoints and connects them to the corresponding controller functions.

```js
import express from "express";
import { getBlogs, createBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogs); // GET all blog posts
router.post("/", createBlog); // POST a new blog post

export default router;
```

---

## 📄 4. Integrate Routes in `server.js`

Registers the blog routes in the main application file to enable API functionality.

```js
import blogRoutes from "./routes/blogRoutes.js";

app.use("/api/blogs", blogRoutes);
```

---

## 🌐 Next.js Integration

To fetch data from the database or send data to it using Next.js, you can utilize the following approaches:

1. **Fetching Data**: Use `getServerSideProps` or `getStaticProps` to fetch blog posts from the `/api/blogs` endpoint.
2. **Sending Data**: Use `fetch` or `axios` in your Next.js components to send POST requests to the same endpoint for creating new blog posts.

This modular structure ensures a clean and maintainable codebase for your blogging platform.
