import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "~/utils/auth";

export default function ProtectedLayout() {
  const [checked, setChecked] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
    setChecked(true);
  }, []);

  if (!checked) return null;
  if (!auth) return <Navigate to="/sign-in" replace />;
  return <Outlet />;
}

// import { Navigate, Outlet } from "react-router";
// import { isAuthenticated } from "~/utils/auth";

// export default function ProtectedLayout() {
//   // SSR safe check
//   if (typeof window !== "undefined" && !isAuthenticated()) {
//     // ❌ agar login nahi hai → sign-in page bhejo
//     return <Navigate to="/sign-in" replace />;
//   }

//   // ✅ agar login hai → protected content show karo
//   return <Outlet />;
