import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "~/utils/auth";

export default function ProtectedLayout() {
  // SSR safe check
  if (typeof window !== "undefined" && !isAuthenticated()) {
    // ❌ agar login nahi hai → sign-in page bhejo
    return <Navigate to="/sign-in" replace />;
  }

  // ✅ agar login hai → protected content show karo
  return <Outlet />;
}