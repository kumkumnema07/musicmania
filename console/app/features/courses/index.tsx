"use client";

export const loader = () => null;

import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";

export default function CoursePage() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any[]>([]);

  // 🔥 FETCH COURSES
  const fetchCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔥 DELETE COURSE
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this course?",
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      // ✅ remove from UI instantly
      setCourses((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>

        <Button onClick={() => navigate("/admin/courses/create")}>
          + Add Course
        </Button>
      </div>

      {/* TABLE */}
      <div className="bg-black rounded-xl shadow border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black text-left">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Description</th>
              <th className="p-3">PDF</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => {
              console.log("image", course.image);
              return (
                <tr key={course.id} className="border-t hover:bg-gray-800">
                  {/* ✅ INDEX */}
                  <td className="p-3">{index + 1}</td>

                  {/* ✅ IMAGE */}
                  <td className="p-3">
                    <img
                      src={course.image}
                      className="w-20 aspect-[4/3] object-cover rounded"
                      // className="h-10 w-10 rounded object-cover border"
                    />
                  </td>

                  {/* ✅ TITLE */}
                  <td className="p-3 font-semibold text-black">
                    {course.title}
                  </td>

                  {/* ✅ DESCRIPTION */}
                  <td className="p-3 text-gray-600 max-w-xs truncate">
                    {course.description}
                  </td>

                  {/* ✅ PDF */}
                  <td className="p-3">
                    <a
                      href={`http://localhost:5000/${course.pdf}`}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      View PDF
                    </a>
                  </td>

                  {/* ✅ ACTIONS */}
                  <td className="p-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        navigate(`/admin/courses/edit/${course.id}`)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(course.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "~/components/ui/button";
// import { useNavigate } from "react-router";
// import {
//   getCourses,
//   deleteCourse,
// } from "./data/courseApi";

// export default function CoursePage() {
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCourses = async () => {
//     try {
//       setLoading(true);
//       const res = await getCourses();
//       setCourses(res?.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleDelete = async (id: string) => {
//     await deleteCourse(id);
//     fetchCourses();
//   };

//   return (
//     <div className="p-6 bg-black min-h-screen">

//       {/* HEADER */}
//       <div className="flex justify-between mb-6">
//         <h1 className="text-2xl font-bold">Courses</h1>

//         <Button onClick={() => navigate("/admin/courses/create")}>
//           + Add Course
//         </Button>
//       </div>

//       {/* LOADING */}
//       {loading && <p>Loading...</p>}

//       {/* TABLE */}
//       <div className="bg-white rounded-xl shadow border overflow-hidden">

//         <table className="w-full text-sm">
//           <thead className="bg-gray-100 text-left">
//             <tr>
//               <th className="p-3">Image</th>
//               <th className="p-3">Title</th>
//               <th className="p-3">Description</th>
//               <th className="p-3">PDF</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {courses.length === 0 && (
//               <tr>
//                 <td colSpan={5} className="p-4 text-center text-gray-500">
//                   No courses found
//                 </td>
//               </tr>
//             )}

//             {courses.map((course) => (
//               <tr key={course.id} className="border-t">

//                 {/* IMAGE */}
//                 <td className="p-3">
//                   {course.image && (
//                     <img
//                       src={course.image}
//                       className="h-10 w-10 object-cover rounded"
//                     />
//                   )}
//                 </td>

//                 {/* TITLE */}
//                 <td className="p-3 font-medium">
//                   {course.title}
//                 </td>

//                 {/* DESCRIPTION */}
//                 <td className="p-3 text-gray-500">
//                   {course.description}
//                 </td>

//                 {/* PDF */}
//                 <td className="p-3">
//                   {course.pdf && (
//                     <a
//                       href={course.pdf}
//                       target="_blank"
//                       className="text-blue-500 underline"
//                     >
//                       View PDF
//                     </a>
//                   )}
//                 </td>

//                 {/* ACTIONS */}
//                 <td className="p-3 flex gap-2">

//                   <Button
//                     size="sm"
//                     variant="outline"
//                     onClick={() =>
//                       navigate(`/admin/courses/edit/${course.id}`)
//                     }
//                   >
//                     Edit
//                   </Button>

//                   <Button
//                     size="sm"
//                     variant="destructive"
//                     onClick={() => handleDelete(course.id)}
//                   >
//                     Delete
//                   </Button>

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>
//     </div>
//   );
// }
