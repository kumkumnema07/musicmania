import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const { email, password } = formData;

    if (!email || !password) {
      return setMessage({
        type: "error",
        text: "All fields are required",
      });
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      const token = res?.data?.token;

      if (!token) throw new Error("Token not received");

      localStorage.setItem("authToken", token);

      setMessage({
        type: "success",
        text: "Login successful!",
      });

      // 🔥 HARD REDIRECT (fix hydration + routing issue)
      window.location.href = "/admin/dashboard";

    } catch (err: any) {
      setMessage({
        type: "error",
        text:
          err?.response?.data?.message ||
          err?.message ||
          "Login failed",
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
          Admin Sign In
        </h2>

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

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />

        <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
          Sign In
        </button>

        <p className="text-sm text-center mt-4 text-black dark:text-white">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}



// import { useState } from "react";
// import { Link, useNavigate } from "react-router";

// export default function SigninForm() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState<{
//     type: "error" | "success";
//     text: string;
//   } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.type]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage(null);

//     const { email, password } = formData;

//     if (!email || !password) {
//       return setMessage({
//         type: "error",
//         text: "All fields are required",
//       });
//     }

//     // 🔥 fake login (baad me backend connect karenge)
//     if (email === "admin@gmail.com" && password === "123456") {
//       setMessage({
//         type: "success",
//         text: "Login successful!",
//       });
//       localStorage.setItem("authToken", "demo-token");
//       setTimeout(() => {
//         navigate("/admin/dashboard");
//       }, 1000);
//     } else {
//       setMessage({
//         type: "error",
//         text: "Invalid email or password",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

//         {/* Message */}
//         {message && (
//           <p
//             className={`text-sm mb-3 text-center ${
//               message.type === "error" ? "text-red-500" : "text-green-600"
//             }`}
//           >
//             {message.text}
//           </p>
//         )}

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 mb-3 border rounded"
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         />

//         {/* Button */}
//         <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
//           Sign In
//         </button>

//         {/* Link */}
//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/sign-up" className="text-blue-500">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }
