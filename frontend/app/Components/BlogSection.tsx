"use client";

import Image from "next/image";
import AnimatedHeader from "@/app/Components/AnimatedHeader";
import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  created_at: string;
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();

        // ✅ FIX: always array
        setBlogs(Array.isArray(data) ? data : data.data || []);
      } catch (err) {
        console.error("Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ✅ HEADER */}
        <AnimatedHeader
          title={
            <>
              Our Latest{" "}
              <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
                News & Blog
              </span>
            </>
          }
          subtitle="Stay updated with the latest music tips, trends, and insights."
        />

        {/* ✅ LOADING */}
        {loading && (
          <p className="text-center text-gray-400 mt-10">
            Loading blogs...
          </p>
        )}

        {/* ❌ NO DATA */}
        {!loading && blogs.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No blogs available
          </p>
        )}

        {/* ✅ BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#111] rounded-2xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#bcee16]"
            >
              
              {/* ✅ IMAGE (4:3 ratio) */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={blog.image || "/logo/musiclogo/default.jpg"}
                  alt={blog.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* ✅ CONTENT */}
              <div className="p-6">

                {/* DATE */}
                <p className="text-xs text-gray-400 mb-2">
                  📅 {new Date(blog.created_at).toDateString()}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-primary line-clamp-2">
                  {blog.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {blog.description}
                </p>

                {/* BUTTON */}
                <Link href={`/blog/${blog.id}`}>
                  <button className="mt-4 bg-primary text-black px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                    Read More →
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}



// import Image from "next/image";
// import AnimatedHeader from "@/app/Components/AnimatedHeader";

// export default function BlogSection() {
//   const blogs = [
//     {
//       title: "Learn Guitar Easily",
//       desc: "Start your guitar journey with simple lessons and expert guidance.",
//       date: "26 Dec 2025",
//       img: "/logo/musiclogo/vasai.svg",
//     },
//     {
//       title: "Why Music is Important",
//       desc: "Music improves focus, creativity, and emotional well-being.",
//       date: "26 Dec 2025",
//      img: "/logo/musiclogo/vasai.svg",
//     },
//     {
//       title: "Best Instruments for Beginners",
//       desc: "Explore the best instruments to start your musical journey.",
//       date: "26 Dec 2025",
//      img: "/logo/musiclogo/vasai.svg",
//     },
//   ];

//   return (
//     <section className="bg-black py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* ✅ Animated Heading */}
//         <AnimatedHeader
//           title={
//             <>
//               Our Latest{" "}
//               <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
//                 News & Blog
//               </span>
//             </>
//           }
//           subtitle="Stay updated with the latest music tips, trends, and insights."
//         />

//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {blogs.map((blog, i) => (
//             <div
//               key={i}
//               className="bg-[#111] rounded-2xl overflow-hidden hover:scale-105 transition"
//             >
//               <div className="relative w-full h-52">
//                 <Image
//                   src={blog.img}
//                   alt={blog.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="p-6">
//                 <p className="text-sm text-gray-400 mb-2">
//                   📅 {blog.date}
//                 </p>

//                 <h3 className="text-lg font-semibold text-primary">
//                   {blog.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mt-2">
//                   {blog.desc}
//                 </p>

//                 <button className="mt-4 bg-primary text-black px-4 py-2 rounded-full text-sm hover:bg-primary transition">
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }