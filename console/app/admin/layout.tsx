
import { Outlet, useLocation } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import { removeToken } from "~/utils/auth";

export default function AdminLayout() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const handleLogout = () => {
    removeToken();
    window.location.href = "/sign-in";
  };

  return (
    <SidebarProvider className="h-screen overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex flex-col h-full w-full ml-0">
        {/* Header */}
        <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-zinc-800 bg-[#0a0a0a]">
          <div className="flex gap-2 text-sm text-zinc-400">
            <span className="font-medium text-white">Admin</span>
            {pathParts.slice(1).map((part, index) => (
              <span key={index} className="capitalize"> / {part}</span>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#bcee16] text-black px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-lime-300 transition"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-[#0a0a0a] overflow-auto">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}


// import { Outlet, useLocation, useNavigate } from "react-router";
// import { AppSidebar } from "~/components/app-sidebar";
// import {
//   SidebarProvider,
//   SidebarInset,
// } from "~/components/ui/sidebar";

// export default function AdminLayout() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const pathParts = location.pathname.split("/").filter(Boolean);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     window.location.href = "/sign-in";
//   };

//   return (
//     <SidebarProvider className="h-screen overflow-hidden">
//       {/* Sidebar */}
//       <AppSidebar />

//       {/* Main Layout */}
//       <SidebarInset className="flex flex-col h-full w-full ml-0">
//         {/* Header */}
//         <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b bg-white">
//           <div className="flex gap-2 text-sm text-gray-600">
//             <span className="font-medium">Admin</span>
//             {pathParts.slice(1).map((part, index) => (
//               <span key={index}> / {part}</span>
//             ))}
//           </div>

//           <button
//             onClick={handleLogout}
//             className="bg-black text-white px-3 py-1 rounded"
//           >
//             Logout
//           </button>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-6 bg-pink-300 overflow-auto">
//           <Outlet />
//         </main>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }
// import { Outlet, useLocation, useNavigate } from "react-router";
// import { AppSidebar } from "~/components/app-sidebar";

// export default function AdminLayout() {
//   const location = useLocation();
//   const navigate = useNavigate(); // ✅ ADD

//   const pathParts = location.pathname.split("/").filter(Boolean);

//   // ✅ LOGOUT FUNCTION
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/sign-in");
//   };

//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <AppSidebar />

//       {/* <aside className="w-64 bg-black text-white p-4">
//         <h2 className="text-xl font-bold mb-6">Music Admin</h2>

//         <ul className="space-y-3">
//           <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
//           <li className="hover:text-gray-300 cursor-pointer">Users</li>
//           <li className="hover:text-gray-300 cursor-pointer">Settings</li>
//         </ul>
//       </aside> */}

//       {/* Main Area */}
//       <div className="flex-1 flex flex-col">

//         {/* Header */}
//         <header className="h-16 flex items-center justify-between px-6 border-b bg-white">
          
//           {/* Breadcrumb */}
//           <div className="flex gap-2 text-sm text-gray-600">
//             <span className="font-medium">Admin</span>
//             {pathParts.slice(1).map((part, index) => (
//               <span key={index}>
//                 / {part}
//               </span>
//             ))}
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-4">
            

//             {/* ✅ LOGOUT BUTTON */}
//             <button
//               onClick={handleLogout}
//               className="bg-black text-white px-3 py-1 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6 bg-gray-100">
//           <Outlet />
//         </main>

//       </div>
//     </div>
//   );
// }
//  Future Upgrade (later)

// Jab tum ready ho jao:

// 👉 Tab add karna:

// shadcn sidebar

// breadcrumb component

// theme switcher

// animations