# 🌐 Fetch Data Using Async/Await in Next.js

If you prefer using the Fetch API (built into JavaScript), here's a simple and effective way to fetch data in your Next.js application:

```jsx
// pages/index.js or any other page/component
import { useEffect, useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/blogs"); // Your backend API
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setBlogs(data); // Set the fetched data into state
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>⏳ Loading...</div>;
  if (error) return <div>❌ {error}</div>;

  return (
    <div>
      <h1>📝 Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h2>📌 {blog.title}</h2>
            <p>{blog.body}</p>
            <small>✍️ Author: {blog.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
```

---

# ✉️ Sending Data Using Async/Await in Next.js

Here's how you can send data to your backend using the Fetch API with async/await:

```jsx
// pages/create.js or any other page/component
import { useState } from "react";

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });
      if (!response.ok) {
        throw new Error("Error creating blog");
      }
      const data = await response.json();
      setMessage("✅ Blog created successfully!");
      setFormData({ title: "", body: "", author: "", image: "" }); // Clear the form
    } catch (error) {
      setMessage("❌ Error creating blog");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>🖋️ Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>📌 Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>📝 Body</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />

        <label>✍️ Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />

        <label>🖼️ Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "⏳ Creating..." : "✅ Create Blog"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateBlog;
```

---

### 🚀 Key Features:

- **Icons**: Added icons for better readability and visual appeal.
- **Improved Text**: Enhanced descriptions and labels for clarity.
- **User Feedback**: Clear loading and success/error messages for better user experience.

Enjoy building your Next.js application! 🎉
