"use client";

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  createCourse,
  updateCourse,
  getCourseById,
} from "../data/courseApi";

import { Button } from "~/components/ui/button";

export default function CourseForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);

  /* FETCH (EDIT MODE) */
  useEffect(() => {
    if (!id) return;

    const fetchCourse = async () => {
      const res = await getCourseById(id);
      const c = res.data;

      setTitle(c.title || "");
      setDescription(c.description || "");

      if (c.image) {
        setPreview(`http://localhost:5000${c.image}`);
      }
    };

    fetchCourse();
  }, [id]);

  /* IMAGE HANDLER */
  const handleImage = (file: File | null) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* SUBMIT */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Fill all fields ❗");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("active", String(active));

      if (image) formData.append("image", image);
      if (pdf) formData.append("pdf", pdf);

      if (isEdit && id) {
        await updateCourse(id, formData);
        alert("Updated ✅");
      } else {
        await createCourse(formData);
        alert("Created ✅");
      }

      navigate("/admin/courses");
    } catch (err: any) {
      console.log("FULL ERROR 👉", err);
      console.log("ERROR RESPONSE 👉", err?.response);
      console.log("ERROR DATA 👉", err?.response?.data);

      alert(err?.response?.data?.message || "Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Course" : "Create Course"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="col-span-2 bg-black p-6 rounded-xl shadow border space-y-5">

            <h2 className="font-semibold text-lg text-white">
              Main Information
            </h2>

            {/* TITLE */}
            <div>
              <label className="text-sm text-gray-300">Course Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm text-gray-300">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                rows={4}
              />
            </div>

            {/* PDF */}
            <div>
              <label className="text-sm text-gray-300">Upload PDF</label>
              <input
                type="file"
                name="pdf"   // ✅ FIX
                onChange={(e) =>
                  setPdf(e.target.files?.[0] || null)
                }
                className="text-white"
              />
            </div>

            {/* BUTTON */}
            <Button className="bg-red-700 text-white w-40">
              {loading
                ? "Processing..."
                : isEdit
                ? "Update Course"
                : "Create Course"}
            </Button>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">

            {/* STATUS */}
            <div className="bg-black p-4 rounded-xl shadow border">
              <h3 className="font-semibold mb-2 text-white">Status</h3>
              <div className="flex justify-between text-white">
                Active
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => setActive(!active)}
                />
              </div>
            </div>

            {/* IMAGE */}
            <div className="bg-black p-4 rounded-xl shadow border">
              <h3 className="font-semibold mb-2 text-white">Thumbnail</h3>

              <input
                type="file"
                name="image"   // ✅ FIX
                onChange={(e) =>
                  handleImage(e.target.files?.[0] || null)
                }
              />

              {preview && (
                <img
                  src={preview}
                  className="mt-3 h-28 rounded border"
                />
              )}
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}