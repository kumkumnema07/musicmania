"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
      const data = await res.json();

      setBlog(data[0]); // ✅ FIX
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          {blog.title}
        </h1>

        {blog.image && (
          <img
            src={blog.image}
            className="w-full rounded-lg mb-6"
          />
        )}

        {/* ✅ FIXED DESCRIPTION */}
        <div
          className="text-gray-300 leading-7"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

      </div>
    </div>
  );
}