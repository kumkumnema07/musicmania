"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  // ✅ handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ SUBMIT (REAL SIGNUP)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const { name, email, password, confirmPassword } = formData;

    // 🔍 validations
    if (!name || !email || !password || !confirmPassword) {
      return setMessage({
        type: "error",
        text: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return setMessage({
        type: "error",
        text: "Passwords do not match",
      });
    }

    if (password.length < 6) {
      return setMessage({
        type: "error",
        text: "Password must be at least 6 characters",
      });
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      setMessage({
        type: "success",
        text: res.data.message || "Account created successfully!",
      });

      // clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // redirect to login
      setTimeout(() => {
        navigate("/sign-in");
      }, 1500);

    } catch (err: any) {
      console.log(err);

      setMessage({
        type: "error",
        text: err?.response?.data?.message || "Signup failed",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
          Create Account
        </h2>

        {/* Message */}
        {message && (
          <p
            className={`text-sm mb-3 text-center ${
              message.type === "error"
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}

        {/* Name */}
        <input
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Email */}
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Password */}
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Confirm Password */}
        <input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Button */}
        <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
          Sign Up
        </button>

        {/* Link */}
        <p className="text-sm text-center mt-4 text-black dark:text-white">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}


// import { useState } from "react";
// import { Link, useNavigate } from "react-router";

// export default function SignupForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [message, setMessage] = useState<{
//     type: "error" | "success";
//     text: string;
//   } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage(null);

//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword) {
//       return setMessage({
//         type: "error",
//         text: "All fields are required",
//       });
//     }

//     if (password !== confirmPassword) {
//       return setMessage({
//         type: "error",
//         text: "Passwords do not match",
//       });
//     }

//     if (password.length < 6) {
//       return setMessage({
//         type: "error",
//         text: "Password must be at least 6 characters",
//       });
//     }

//     // fake success
//     setMessage({
//       type: "success",
//       text: "Account created successfully!",
//     });

//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });

//     setTimeout(() => {
//       navigate("/sign-in");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Create Account
//         </h2>

//         {/* Message */}
//         {message && (
//           <p
//             className={`text-sm mb-3 text-center ${
//               message.type === "error"
//                 ? "text-red-500"
//                 : "text-green-600"
//             }`}
//           >
//             {message.text}
//           </p>
//         )}

//         {/* Name */}
//         <input
//           id="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full p-2 mb-3 border rounded"
//         />

//         {/* Email */}
//         <input
//           id="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-2 mb-3 border rounded"
//         />

//         {/* Password */}
//         <input
//           id="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full p-2 mb-3 border rounded"
//         />

//         {/* Confirm Password */}
//         <input
//           id="confirmPassword"
//           type="password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm Password"
//           className="w-full p-2 mb-4 border rounded"
//         />

//         {/* Button */}
//         <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
//           Sign Up
//         </button>

//         {/* Link */}
//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/sign-in" className="text-blue-500">
//             Sign In
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }