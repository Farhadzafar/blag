import mongoose from "mongoose";
const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title require!"],
  },
  discretion: {
    type: String,
    require: [true, "discretion require!"],
  },
  status: {
    type: String,
    require: [true, "Status should be require!"],
  },
  imageCover: {
    type: String,
    require: [true, "image should be require!"],
  },
  tags: {
    type: [String],
  },
  category: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogsSchema);

export default Blog;
