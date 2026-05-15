"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

type Policy = {
  type: string;
  content: string;
};

export default function PolicyIndex() {
  const navigate = useNavigate();
  const [data, setData] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH DATA
  const fetchData = async () => {
    try {
      setLoading(true);

      const privacy = await axios.get(
        "http://localhost:5000/api/policy/privacy"
      );

      const terms = await axios.get(
        "http://localhost:5000/api/policy/terms"
      );

      setData([
        {
          type: "privacy",
          content: privacy.data?.content || "",
        },
        {
          type: "terms",
          content: terms.data?.content || "",
        },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Policy Management
        </h1>

        <button
          onClick={() => navigate("/admin/policy/create")}
          className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-300"
        >
          + Add Policy
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-zinc-800 text-sm text-zinc-400">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Preview</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-t border-zinc-800">

                  {/* TYPE */}
                  <td className="p-3 capitalize">
                    {item.type}
                  </td>

                  {/* PREVIEW */}
                  <td className="p-3">
                    {item.content
                      ? item.content.replace(/<[^>]+>/g, "").slice(0, 60) + "..."
                      : "No Data"}
                  </td>

                  {/* ACTION */}
                  <td className="p-3">
                    <button
                      onClick={() =>
                        navigate(`/admin/policy/edit/${item.type}`)
                      }
                      className="bg-zinc-700 px-3 py-1 rounded hover:bg-zinc-600"
                    >
                      Edit
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center p-4 text-zinc-400">
                  No data found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}