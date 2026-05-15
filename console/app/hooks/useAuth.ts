import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser } from "~/api/auth.api";
import { saveToken, removeToken } from "~/utils/auth";

export function useAuth() {
  const queryClient = useQueryClient();

  // ✅ Register
  const registerMutation = useMutation<any, Error, any>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.info("Registered successfully.", data);
    },
    onError: (error) => {
      console.error("Register failed:", error.message);
    },
  });

  // ✅ Login
  const loginMutation = useMutation<
    { token: string }, // ✅ expected response
    Error,
    { email: string; password: string } // ✅ request type
  >({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data?.token) {
        saveToken(data.token);
      }
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });

  // ✅ Logout
  const logoutMutation = useMutation<any, Error, void>({
    mutationFn: logoutUser,
    onSuccess: () => {
      removeToken();
      queryClient.clear();
    },
    onError: (error) => {
      console.error("Logout failed:", error.message);
    },
  });

  return {
    register: registerMutation.mutate,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading:
      registerMutation.isPending ||
      loginMutation.isPending ||
      logoutMutation.isPending,
  };
}

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { loginUser, logoutUser, registerUser } from "~/api/auth.api";
// import { saveToken, removeToken } from "~/utils/auth";

// export function useAuth() {
//     const queryClient = useQueryClient();

//     // Register
//     const registerMutation = useMutation({
//         mutationFn: registerUser,
//         onSuccess: (data) => {
//             console.info("Registered successfully.", data);
//         },
//         onError: (error: any) => {
//             console.error("Registered failed.", error.message);
//         },
//     });

//     // Login
//     const loginMutation = useMutation({
//         mutationFn: loginUser,
//         onSuccess: (data) => {
//             saveToken(data.token);
//             queryClient.invalidateQueries({ queryKey: ["user"] }); // Invalidate user query
//         },
//         onError: (error: any) => {
//             console.error("Login failed.", error.message);
//         },
//     });

//     // Logout
//     const logoutMutation = useMutation({
//         mutationFn: logoutUser,
//         onSuccess: () => {
//             removeToken();
//             queryClient.clear();
//         },
//         onError: (error: any) => {
//             console.error("Logout failed.", error.message);
//         },
//     });

//     return {
//         register: registerMutation.mutate,
//         login: loginMutation.mutate,
//         logout: logoutMutation.mutate,
//         isLoading:
//             registerMutation.isPending ||
//             loginMutation.isPending ||
//             logoutMutation.isPending,
//     }
// }
