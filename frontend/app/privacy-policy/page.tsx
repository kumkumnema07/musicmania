"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function PrivacyPolicy() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/policy/privacy")
      .then((res) => setData(res.data?.content || ""));
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-2xl font-bold mb-4">
        Privacy Policy
      </h1>

      {/* 🔥 IMPORTANT CHANGE */}
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}