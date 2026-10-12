"use client";

import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  pdf: string | null;
};

export default function CoursesSection() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="bg-black py-20 px-6">
      <AnimatedHeader
        title={
          <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
            Instrumentals & Vocals Classes
          </span>
        }
        subtitle="Choose your favorite instrument and start learning today."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative rounded-2xl p-[2px] 
  bg-gradient-to-r from- via-purple-500 to-blue-500 
  hover:shadow-[0_0_20px_#ec4899] transition duration-300"
          >
            {/* Inner Card */}
            <div className="bg-[#111] rounded-2xl p-6 h-full">
              <Image
                src={course.image ? course.image : "/default.jpg"}
                alt={course.title}
                width={500}
                height={375}
                className="rounded-xl aspect-[4/3] mb-4 h-60 w-full object-contain"
              />

              <h3 className="text-xl font-bold text-white text-center">
                {course.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm text-center">
                {course.description}
              </p>

              {course.pdf && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={course.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    Start Now
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import Image from "next/image";
// import AnimatedHeader from "./AnimatedHeader";

// const courses = [
//   {
//     title: "Drums Classes",
//     desc: "Master the art of drumming with expert-led training sessions.",
//     img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
//     pdf: "/pdfs/guitar.pdf",
//   },
//   {
//     title: "Guitar Lessons",
//     desc: "Learn acoustic, electric & classical guitar professionally.",
//     img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
//     pdf: "/pdfs/drums.pdf",
//   },
//   {
//     title: "Piano Lessons",
//     desc: "Unlock creativity with structured piano training.",
//     img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
//     pdf: "/pdfs/drums.pdf",
//   },
//   {
//     title: "Piano Lessons",
//     desc: "Unlock creativity with structured piano training.",
//     img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
//     pdf: "/pdfs/drums.pdf",
//   },
//   {
//     title: "Vocal Training",
//     desc: "Improve your vocal skills with expert guidance.",
//     img: "https://images.unsplash.com/photo-1517232115160-ff93364542dd",
//   },
//   {
//     title: "Drums Classes",
//     desc: "Master the art of drumming with expert-led training sessions.",
//     img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
//   },
// ];

// export default function CoursesSection() {
//   return (
//     <section className="bg-black py-20 px-6">
//       <AnimatedHeader
//         title={
//           <>
//             <span className="bg-gradient-to-b from-[#bcee16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
//               Instrumentals & Vocals Classes
//             </span>{" "}
//           </>
//         }
//         subtitle="Choose your favorite instrument and start learning today."
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className="relative rounded-3xl p-[3px] animate-border hover:scale-105 transition duration-500"
//           >
//             <div className="bg-[#111] rounded-3xl p-10 h-full flex flex-col">
//               <Image
//                 src={`${course.img}?w=800&q=80`}
//                 alt={course.title}
//                 width={500}
//                 height={256}
//                 loading="lazy"
//                 sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//                 className="rounded-xl mb-6 h-64 w-full object-cover"
//               />
//               {/* <Image
//                 src={course.img}
//                 alt={course.title}
//                 width={500}
//                 height={256}
//                 className="rounded-xl mb-6 h-64 w-full object-cover"
//               /> */}

//               <h3 className="text-2xl font-bold text-primary text-center">
//                 {course.title}
//               </h3>

//               <p className="text-gray-400 mt-3 text-sm text-center">
//                 {course.desc}
//               </p>

//               <div className="mt-6 flex justify-center">
//                 <a
//                   href={course.pdf}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-primary text-black font-semibold px-6 py-2 rounded-full hover:bg-primary transition inline-block text-center"
//                 >
//                   Start Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
