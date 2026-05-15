"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "~/components/ui/button";

export default function CTAIndex() {
  const [data, setData] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  const getAuthHeader = () => {
    const token = localStorage.getItem("authToken");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // FETCH CTA
  const fetchCTA = async () => {
    const res = await axios.get(`${API}/cta`);
    setData(res.data);
    setPreview(res.data?.image || "");
  };

  useEffect(() => {
    fetchCTA();
  }, []);

  // IMAGE
  const handleImage = (file: File | null) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image && !data) {
      alert("Select image");
      return;
    }

    const formData = new FormData();
    if (image) formData.append("image", image);

    try {
      setLoading(true);

      await axios.post(`${API}/cta`, formData, getAuthHeader());

      alert("CTA Updated!");
      setShowForm(false);
      fetchCTA();
    } catch (err) {
      console.error(err);
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">CTA Banner</h1>

        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : data ? "Update Banner" : "Upload Banner"}
        </Button>
      </div>

      {/* PREVIEW */}
      {!showForm && (
        data?.image ? (
          <img
            src={data.image}
            className="w-full h-[300px] object-contain rounded"
          />
        ) : (
          <p>No banner uploaded</p>
        )
      )}

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">

          <input
            type="file"
            onChange={(e) =>
              handleImage(e.target.files?.[0] || null)
            }
          />

          {preview && (
            <img
              src={preview}
              className="w-full h-[300px] object-contain"
            />
          )}

          <Button type="submit">
            {loading ? "Saving..." : "Save CTA"}
          </Button>

        </form>
      )}

    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { getCTA } from "./data/ctaApi";
// import { Button } from "~/components/ui/button";

// export default function CTAIndex() {
//   const [data, setData] = useState<any>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCTA().then(res => setData(res.data));
//   }, []);

//   return (
//     <div className="p-6 bg-black min-h-screen text-white">

//       <div className="flex justify-between mb-6">
//         <h1 className="text-2xl font-bold">CTA Banner</h1>

//         {/* ✅ ALWAYS SAME PAGE */}
//         <Button onClick={() => navigate("/admin/cta")}>
//           {data ? "Update Banner" : "Upload Banner"}
//         </Button>
//       </div>

//       {data?.image ? (
//         <img
//           src={data.image}
//           className="w-full h-[300px] object-cover rounded"
//         />
//       ) : (
//         <p>No banner uploaded</p>
//       )}

//     </div>
//   );
// }