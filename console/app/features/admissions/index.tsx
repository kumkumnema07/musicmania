"use client";

import React, { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export default function AdmissionPage() {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("");

  // 🔥 FETCH DATA
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/admissions");
    const result = await res.json();

    console.log("DATA:", result);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 DELETE
  const handleDelete = async (id: number) => {
    if (!confirm("Delete this record?")) return;

    await fetch(`http://localhost:5000/api/admissions/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  // 🔥 REMARK UPDATE
  const handleRemark = async (id: number, remark: string) => {
    await fetch(`http://localhost:5000/api/admissions/${id}/remark`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ remark }),
    });
  };

  // 🔥 FILTER
  const filtered = data.filter((item) => {
    return (
      item.name?.toLowerCase().includes(search.toLowerCase()) &&
      (branch ? item.branch?.toLowerCase() === branch.toLowerCase() : true)
    );
  });

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">Student Admissions</h1>

      {/* 🔥 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Today</p>
          <p className="text-2xl font-bold">
            {
              data.filter(
                (d) =>
                  new Date(d.created_at).toDateString() ===
                  new Date().toDateString(),
              ).length
            }
          </p>
        </div>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded bg-gray-900 border border-gray-700"
        />

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="p-2 rounded bg-gray-900 border border-gray-700"
        >
          <option value="">All Branch</option>
          <option value="Vasai">Vasai</option>
          <option value="Nalasopara">Nalasopara</option>
          <option value="Virar">Virar</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-gray-900 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Branch</th>
              <th className="p-3">Course</th>
              <th className="p-3">Days</th>
              <th className="p-3">Photo</th>
              <th className="p-3">Remark (Admin Only)</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center p-6 text-gray-400">
                  No data found
                </td>
              </tr>
            ) : (
              filtered.map((item, index) => (
                <tr key={item.id} className="border-t border-gray-800">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.mobile}</td>
                  <td className="p-3">{item.branch}</td>
                  <td className="p-3">{item.course}</td>
                  <td className="p-3">{item.class_days}</td>

                  {/* PHOTO */}
                  <td className="p-3">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        className="h-12 w-12 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>

                  {/* 🔥 REMARK */}
                  <td className="p-3">
                    <input
                      defaultValue={item.remark || ""}
                      placeholder="Write remark..."
                      className="bg-gray-800 p-1 rounded text-sm w-40"
                      onBlur={(e) => handleRemark(item.id, e.target.value)}
                    />
                  </td>

                  {/* ACTION */}
                  <td className="p-3">
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(item.id)}
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
