"use client";

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { createBlog, updateBlog, getBlogById } from "../data/blogApi";
import { Button } from "~/components/ui/button";
import { RichTextEditor } from "~/components/RichEditor";



export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);

  // FETCH BLOG
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      const res = await getBlogById(id);
      const b = res.data[0];

      setTitle(b.title || "");
      setDescription(b.description || "");

      if (b.image) {
        setPreview(b.image);
      }
    };

    fetchBlog();
  }, [id]);

  // IMAGE
  const handleImage = (file: File | null) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("active", String(active));

      if (image) formData.append("image", image);

      if (isEdit && id) {
        await updateBlog(id, formData);
      } else {
        await createBlog(formData);
      }

      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">

      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Blog" : "Create Blog"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">

        {/* TITLE */}
        <div>
          <label className="text-sm text-gray-300">Title</label>
          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-3 rounded bg-gray-900 border border-gray-700"
          />
        </div>

        {/* RICH EDITOR */}
        <div>
          <label className="text-sm text-gray-300 mb-1 block">
            Content
          </label>

          <RichTextEditor
            value={description}
            onChange={setDescription}
          />
        </div>

        {/* IMAGE */}
        <div className="space-y-3">
  {/* LABEL */}
  <label className="text-sm text-gray-300 block">
    Thumbnail
  </label>

  {/* FILE INPUT */}
  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      handleImage(e.target.files?.[0] || null)
    }
    className="block w-full text-sm text-gray-300
      file:mr-4 file:py-2 file:px-4
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-700 file:text-white
      hover:file:bg-gray-600"
  />

  {/* PREVIEW */}
  {preview && (
    <div className="space-y-2">
      <img
        src={preview}
        className="h-56 w-95 rounded border object-contain"
      />

      <button
        type="button"
        onClick={() => {
          setImage(null);
          setPreview(null);
        }}
        className="text-red-400 text-sm"
      >
        Remove
      </button>
    </div>
  )}
</div>

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
          />
          <span>Active</span>
        </div>

        {/* BUTTON */}
        <Button className="bg-red-600 hover:bg-red-700">
          {loading
            ? "Processing..."
            : isEdit
            ? "Update Blog"
            : "Create Blog"}
        </Button>

      </form>
    </div>
  );
}