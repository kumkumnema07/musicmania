"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "~/components/ui/button";

export default function CTAForm() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  // ✅ TOKEN HEADER
  const getAuthHeader = () => {
    const token = localStorage.getItem("authToken");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // 🔥 FETCH CTA
  useEffect(() => {
    const fetchCTA = async () => {
      try {
        const res = await axios.get(`${API}/cta`);

        if (res.data) {
          setData(res.data);
          setPreview(res.data.image); // ✅ FIXED
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCTA();
  }, []);

  // 🔥 IMAGE HANDLE
  const handleImage = (file: File | null) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image && !data) {
      alert("Please select image");
      return;
    }

    const formData = new FormData();
    if (image) formData.append("image", image);

    try {
      setLoading(true);

      // ✅ ONLY POST (NO PUT)
      await axios.post(`${API}/cta`, formData, getAuthHeader());

      alert("CTA Saved Successfully!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">
        {data ? "Edit CTA Banner" : "Upload CTA Banner"}
      </h1>

      <form onSubmit={handleSubmit} className="md:space-y-6 max-w-2xl">

        {/* FILE INPUT */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">
            Upload Banner
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleImage(e.target.files?.[0] || null)
            }
            className="w-full text-sm text-gray-300 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-md file:border-0 
              file:bg-red-300 file:text-white 
              hover:file:bg-red-700 cursor-pointer"
          />
        </div>

        {/* PREVIEW */}
        {preview && (
          <div>
            <p className="text-sm text-gray-400 mb-2">Preview</p>

            <img
              src={preview}
              className="w-full h-[500px] md:h-[600px] object-contain rounded"
            />

            <button
              type="button"
              onClick={() => {
                setImage(null);
                setPreview("");
              }}
              className="text-red-400 text-sm mt-2"
            >
              Remove
            </button>
          </div>
        )}

        {/* BUTTON */}
        <Button type="submit" className="bg-red-600 hover:bg-red-700">
          {loading ? "Processing..." : "Save Banner"}
        </Button>

      </form>
    </div>
  );
}