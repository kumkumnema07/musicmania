"use client";

import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="bg-[#111] p-10 rounded-3xl w-full max-w-md border border-yellow-400">

        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          Student Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}