"use client";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  getTestimonials,
  deleteTestimonial,
} from "./data/testimonialApi";

import { Button } from "~/components/ui/button";

export default function TestimonialPage() {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  // 🔥 FETCH DATA
  const fetchTestimonials = async () => {
    try {
      const res = await getTestimonials();
      setTestimonials(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // 🔥 DELETE
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;

    try {
      await deleteTestimonial(id);
      fetchTestimonials();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Testimonials</h1>

        <Button onClick={() => navigate("/admin/testimonials/create")}>
          + Add Testimonial
        </Button>
      </div>

      {/* TABLE */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800 text-left">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">City</th>
              <th className="p-3">Message</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-6 text-gray-400">
                  No testimonials found
                </td>
              </tr>
            ) : (
              testimonials.map((t: any, index: number) => (
                <tr
                  key={t.id}
                  className="border-t border-gray-800"
                >
                  {/* NUMBER */}
                  <td className="p-3">{index + 1}</td>

                  {/* IMAGE */}
                  <td className="p-3">
                    {t.image ? (
                      <img
                        src={`http://localhost:5000/uploads/${t.image}`}
                        className="h-14 w-14 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>

                  {/* NAME */}
                  <td className="p-3">{t.student_name}</td>

                  {/* CITY */}
                  <td className="p-3">{t.city}</td>

                  {/* MESSAGE */}
                  <td className="p-3 max-w-xs truncate">
                    {t.message}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        navigate(`/admin/testimonials/edit/${t.id}`)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(t.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}