"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AppConfigIndex() {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();

  // ✅ fetch data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/app-config");
      if (res.data) {
        // make array (since single config)
        setData([res.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 text-white">
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">App Configuration</h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/admin/app-config/create")}
            className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold"
          >
            + Add Configuration
          </button>

          <button
            onClick={() => navigate("/admin/app-config/edit")}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            Edit Configuration
          </button>
        </div>
      </div>

      {/* 🔥 SEARCH */}
      <input
        placeholder="Filter by appName..."
        className="mb-4 w-full md:w-1/3 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2"
      />

      {/* 🔥 TABLE */}
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-800 text-sm text-zinc-400">
            <tr>
              <th className="p-3">App Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Company Address</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-zinc-800">
                <td className="p-3">{item.app_name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">
                  {item.address}
                  <br />
                  {item.map_link && (
                    <a
                      href={item.map_link}
                      target="_blank"
                      className="text-blue-400 text-sm"
                    >
                      View Map
                    </a>
                  )}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => navigate("/admin/app-config/edit")}
                    className="bg-zinc-700 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-4 text-zinc-400">
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
