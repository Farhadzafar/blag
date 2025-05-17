// app/getBlogs/[id]/page.tsx

import { notFound } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  discretion: string;
  imageCover: string;
  tags: string[];
  category: string;
  status: string;
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${params.id}`);
  if (!res.ok) return notFound();

  const data = await res.json();
  const blog: Blog = data.data;

  return (
    <section className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="w-full h-[300px] overflow-hidden rounded-md">
        <img
          src={blog.imageCover}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <div className="mt-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
          {blog.category}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          {blog.status}
        </span>

        <h1 className="text-4xl font-extrabold mt-4 text-gray-900 leading-tight">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {blog.discretion}
        </p>

        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
