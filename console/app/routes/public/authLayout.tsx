import { Outlet } from "react-router";


export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <Outlet />
    </div>
  );
}

// import { Outlet } from "react-router";

// export default function AuthLayout() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
//       <Outlet />
//     </div>
//   );
// }