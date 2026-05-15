// app/utils/auth.ts

export const saveToken = (token: string) => {
  localStorage.setItem("authToken", token);
};

export const getToken = () => {
  return localStorage.getItem("authToken");
};

export const removeToken = () => {   // ✅ FIX
  localStorage.removeItem("authToken");
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!getToken();
};
// // Save token
// export const saveToken = (token: string) => {
//   if (typeof window === "undefined") return;
//   localStorage.setItem("authToken", token);
// };

// // Get token
// export const getToken = (): string | null => {
//   if (typeof window === "undefined") return null;
//   return localStorage.getItem("authToken");
// };

// // Remove token (logout)
// export const removeToken = () => {
//   if (typeof window === "undefined") return;
//   localStorage.removeItem("authToken");
// };

// // Decode JWT (without verification)
// export const decodeToken = (token: string): any | null => {
//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     return payload;
//   } catch (error) {
//     return null;
//   }
// };

// // Check authentication (with expiry check)
// export const isAuthenticated = (): boolean => {
//   if (typeof window === "undefined") return false;

//   const token = getToken();
//   if (!token) return false;

//   const decoded = decodeToken(token);
//   if (!decoded || !decoded.exp) return false;

//   const currentTime = Date.now() / 1000;

//   return decoded.exp > currentTime;
// };