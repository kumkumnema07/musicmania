import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export function ProtectedRoute({ children }: any) {
  const [ready, setReady] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) setIsAuth(true);

    setReady(true);
  }, []);

  if (!ready) return null;

  if (!isAuth) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}





// import React from "react";
// import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "~/utils/auth";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// // Protech routes that require login
// export function ProtectedRoute({ children }: ProtectedRouteProps) {
//   if (typeof window !== "undefined" && !isAuthenticated()) {
//     return <Navigate to="/sign-in" replace />;
//   }

//   return <>{children}</>;
// }
