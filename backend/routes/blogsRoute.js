import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlog,
} from "../controllers/blogsController.js";

const router = express.Router();

//  🥷Router definition
router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlog);
export { router };
