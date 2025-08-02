import Blog from "../models/blog.js";

const createBlog = async (req, res) => {
  const data = req.body;
  const newBlog = await Blog.create(data);

  try {
    res.status(201).json({
      status: "success",
      blog: newBlog,
    });
  } catch (error) {
    res.status(400).json({
      status: "file",
      massage: error,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: blogs,
    });
  } catch (error) {}
};

const getBlog = async (req, res) => {
  const { id } = req.params;
  // const blog = await Blog.findById(id);
  try {
    // const blog = await Blog.find(id);
    const blog = await Blog.findById(id);
    // const blog = await Blog.findById(id).populate("author");
    // const blog = await Blog.findById(id).populate("author", "name email");
    // const blog = await Blog.findById(id).populate("author", "name email").execPopulate();
    // const blog = await Blog.findById(id).populate("author", "name email").exec();
    // const blog = await Blog.findById(id).populate("author", "name email").execPopulate();
    // st blog = await Blog.findById(id).populate("author", "name email").execPopulate();

    if (!blog) {
      return res.status(404).json({
        status: "fail",
        massage: "Blog not found🔥",
      });
    }

    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "file",
      massage: error,
    });
  }
};

export { getAllBlogs, getBlog, createBlog };
