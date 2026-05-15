"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { RichTextEditor } from "~/components/RichEditor";

export default function PolicyForm() {
  const navigate = useNavigate();
  const { id,type } = useParams(); // privacy / terms
  const isEdit = !!id;

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH DATA (EDIT MODE)
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/policy/${id}`
        );

        setContent(res.data?.content || "");
      } catch (err) {
        console.log(err);
      }
    };

    
    fetchData();
  }, [id]);

  // 🔥 SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/policy", {
        type,
        content,
      });

      alert("Saved successfully ✅");

      navigate("/admin/policy");
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">

      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Policy" : "Create Policy"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">

        {/* TYPE */}
        {!isEdit && (
          <div>
            <label className="text-sm text-gray-300">Policy Type</label>
            <select
              className="w-full mt-1 p-3 rounded bg-gray-900 border border-gray-700"
              onChange={(e) => (window.location.href = `/admin/policy/create/${e.target.value}`)}
            >
              <option value="">Select</option>
              <option value="privacy">Privacy Policy</option>
              <option value="terms">Terms & Conditions</option>
            </select>
          </div>
        )}

        {/* CONTENT */}
        <div>
          <label className="text-sm text-gray-300 mb-1 block">
            Content
          </label>

          <RichTextEditor
            value={content}
            onChange={setContent}
          />
        </div>

        {/* BUTTON */}
        <button className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold">
          {loading ? "Saving..." : "Save Policy"}
        </button>

      </form>
    </div>
  );
}