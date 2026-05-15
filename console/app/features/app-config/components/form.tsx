"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  mode: "create" | "edit";
};

export default function AppConfigForm({ mode }: Props) {
  const [form, setForm] = useState<any>({
    app_name: "",
    email: "",
    phone: "",
    address: "",
    map_link: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    linkedin: "",
    whatsapp: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ input change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ fetch only in edit mode
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/app-config");
      if (res.data) setForm(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (mode === "edit") {
      fetchData();
    }
  }, [mode]);

  // ✅ submit
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/app-config", form);
      alert(mode === "edit" ? "Updated successfully ✅" : "Created successfully ✅");
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 reusable input
  const Input = ({ label, name, placeholder }: any) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-zinc-400">{label}</label>
      <input
        name={name}
        value={form[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
    </div>
  );

  // 🔹 section wrapper
  const Section = ({ title, children }: any) => (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );

  return (
    <div className="p-6 text-white">
      {/* 🔥 BASIC INFO */}
      <Section title="Basic Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="App Name" name="app_name" placeholder="Music Mania" />
          <Input label="Email" name="email" placeholder="email@example.com" />
          <Input label="Phone Number" name="phone" placeholder="9876543210" />
        </div>
      </Section>

      {/* 🔥 ADDRESS */}
      <Section title="Company Address">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Address" name="address" placeholder="City, State" />
          <Input label="Google Map Link" name="map_link" placeholder="https://..." />
        </div>
      </Section>

      {/* 🔥 SOCIAL LINKS */}
      <Section title="Social & External Links">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Facebook" name="facebook" />
          <Input label="Instagram" name="instagram" />
          <Input label="Twitter" name="twitter" />
          <Input label="YouTube" name="youtube" />
          <Input label="LinkedIn" name="linkedin" />
          <Input label="WhatsApp" name="whatsapp" />
        </div>
      </Section>

      {/* 🔥 BUTTON */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300"
        >
          {loading
            ? "Saving..."
            : mode === "edit"
            ? "Update Changes"
            : "Create Config"}
        </button>
      </div>
    </div>
  );
}