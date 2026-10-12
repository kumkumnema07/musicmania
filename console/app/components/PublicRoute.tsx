import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "~/utils/auth";

export default function PublicRoute() {
  const [checked, setChecked] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
    setChecked(true);
  }, []);

  if (!checked) return null;
  if (auth) return <Navigate to="/admin/dashboard" replace />;
  return <Outlet />;
}


// import { Navigate, Outlet } from "react-router";
// import { isAuthenticated } from "~/utils/auth";

// export default function PublicRoute() {
//   if (typeof window !== "undefined" && isAuthenticated()) {
//     return <Navigate to="/admin/dashboard" replace />;
//   }

//   return <Outlet />;
// }
// import React from "react";
// import { Navigate } from "react-router";
// import { isAuthenticated } from "~/utils/auth";

// interface PublicRouteProps {
//   children: React.ReactNode;
// }

// export function PublicRoute({ children }: PublicRouteProps) {
//   // SSR safe check
//   if (typeof window !== "undefined" && isAuthenticated()) {
//     // agar user already login hai → dashboard bhejo
//     return <Navigate to="/admin/dashboard" replace />;
//   }

//   // agar login nahi hai → page show karo
//   return <>{children}</>;
// }