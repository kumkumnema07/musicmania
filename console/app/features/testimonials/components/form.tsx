"use client";

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  createTestimonial,
  updateTestimonial,
  getTestimonialById,
} from "../data/testimonialApi";

import { Button } from "~/components/ui/button";

export default function TestimonialForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH (EDIT MODE)
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const res = await getTestimonialById(id);
      const t = res.data;

      setName(t.student_name || "");
      setCity(t.city || "");
      setMessage(t.message || "");

      if (t.image) {
        setPreview(`http://localhost:5000/uploads/${t.image}`);
      }
    };

    fetchData();
  }, [id]);

  // ✅ IMAGE HANDLE
  const handleImage = (file: File | null) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("student_name", name);
    formData.append("city", city);
    formData.append("message", message);

    if (image) formData.append("image", image);

    try {
      if (isEdit && id) {
        await updateTestimonial(id, formData);
      } else {
        await createTestimonial(formData);
      }

      navigate("/admin/testimonials");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Testimonial" : "Create Testimonial"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 max-w-3xl"
      >
        {/* NAME */}
        <div>
          <label className="text-sm text-gray-300">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="Student name"
          />
        </div>

        {/* CITY */}
        <div>
          <label className="text-sm text-gray-300">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full mt-1 p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="City"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-1 p-3 rounded bg-gray-900 border border-gray-700 min-h-[150px]"
            placeholder="Write testimonial..."
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="text-sm text-gray-300 block mb-2">
            Thumbnail
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleImage(e.target.files?.[0] || null)
            }
          />

          {/* PREVIEW */}
          {preview && (
            <div className="mt-3">
              <img
                src={preview}
                className="w-full max-w-sm max-h-[300px] object-contain rounded border"
              />

              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
                className="text-red-400 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* BUTTON */}
        <Button className="bg-red-600 hover:bg-red-700">
          {loading
            ? "Processing..."
            : isEdit
            ? "Update Testimonial"
            : "Create Testimonial"}
        </Button>
      </form>
    </div>
  );
}