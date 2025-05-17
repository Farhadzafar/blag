import Link from "next/link";

// app/blogs/page.tsx (Server Component)
async function fetchBlogs() {
  const res = await fetch("http://localhost:5000/api/v1/blogs", {
    cache: "no-store", // disables caching for fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  return data.data;
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">📝 Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: any) => (
          <Link href={`/getBlogs/${blog._id}`} key={blog._id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={blog.imageCover}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold text-blue-600">
                  {blog.title}
                </h2>
                <p className="text-gray-700 line-clamp-3">{blog.discretion}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                    {blog.category}
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                    {blog.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
