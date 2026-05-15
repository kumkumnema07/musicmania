"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { getBlogs, deleteBlog } from "./data/blogApi";

export default function BlogPage() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await getBlogs();
      setBlogs(res?.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // DELETE
  const handleDelete = async (id: string) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>

        <Button onClick={() => navigate("/admin/blogs/create")}>
          + Add Blog
        </Button>
      </div>

      {/* LOADING */}
      {loading && <p>Loading...</p>}

      {/* TABLE */}
      <div className="bg-gray-900 rounded-xl shadow border border-gray-700 overflow-hidden">
        <table className="w-full text-sm">
          {/* HEAD */}
          <thead className="bg-gray-800 text-left">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {blogs.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-400">
                  No blogs found
                </td>
              </tr>
            )}

            {blogs.map((b, index) => (
              <tr key={b.id} className="border-t border-gray-700">
                {/* NUMBER */}
                <td className="p-3">{index + 1}</td>

                {/* IMAGE */}
                <td className="p-3">
                  {b.image && (
                    <img
                      src={b.image}
                      className="h-12 w-20 object-cover rounded"
                    />
                  )}
                </td>

                {/* TITLE */}
                <td className="p-3 font-medium">{b.title}</td>

                {/* DESCRIPTION */}
                <td className="p-3 text-gray-400 line-clamp-2 max-w-xs">
                  <div dangerouslySetInnerHTML={{ __html: b.description }} />
                </td>

                {/* ACTIONS */}
                <td className="p-3 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate(`/admin/blogs/edit/${b.id}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(b.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
