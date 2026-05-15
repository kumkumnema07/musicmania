import axios from "axios";

// ❗ HARD FIX (env छोड़ो अभी)
const API = import.meta.env.VITE_API_URL;

// TOKEN HEADER
const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// CREATE
export const createCourse = (data: FormData) => {
  return axios.post(`${API}/courses`, data, getAuthHeader());
};

// GET ALL
export const getCourses = () => {
  return axios.get(`${API}/courses`);
};

// GET BY ID
export const getCourseById = (id: string) => {
  return axios.get(`${API}/courses/${id}`);
};

// UPDATE
export const updateCourse = (id: string, data: FormData) => {
  return axios.put(`${API}/courses/${id}`, data, getAuthHeader());
};

// DELETE
export const deleteCourse = (id: string) => {
  return axios.delete(`${API}/courses/${id}`, getAuthHeader());
};



// import axios from "axios";

// const API = import.meta.env.VITE_API_URL;

// // helper function
// const getAuthHeader = () => {
//   const token = localStorage.getItem("token");
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// // CREATE
// export const createCourse = (data: FormData) => {
//   return axios.post(`${API}/courses`, data, getAuthHeader());
// };

// // GET ALL
// export const getCourses = () => {
//   return axios.get(`${API}/courses`);
// };

// // GET BY ID
// export const getCourseById = (id: string) => {
//   return axios.get(`${API}/courses/${id}`);
// };

// // UPDATE
// export const updateCourse = (id: string, data: FormData) => {
//   return axios.put(`${API}/courses/${id}`, data, getAuthHeader());
// };

// // DELETE
// export const deleteCourse = (id: string) => {
//   return axios.delete(`${API}/courses/${id}`, getAuthHeader());
// };