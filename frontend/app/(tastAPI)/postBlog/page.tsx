"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface BlogFormData {
  title: string;
  discretion: string;
  status: string;
  imageCover: string;
  tags: string;
  category: string;
}

export default function CreateBlogForm() {
  const [form, setForm] = useState<BlogFormData>({
    title: "",
    discretion: "",
    status: "draft",
    imageCover: "",
    tags: "",
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const blogData = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()), // convert to array
    };

    try {
      const res = await fetch("http://localhost:5000/api/v1/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const result = await res.json();
      console.log("✅ Blog uploaded:", result);
    } catch (error) {
      console.error("❌ Error uploading blog:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 space-y-4 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-bold">📝 Create New Blog</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="discretion"
        placeholder="Discretion"
        value={form.discretion}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        <option value="upcoming">Upcoming</option>
      </select>

      <input
        type="url"
        name="imageCover"
        placeholder="Image URL"
        value={form.imageCover}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        pattern="https?://.+"
        required
      />

      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit Blog
      </button>
    </form>
  );
}
