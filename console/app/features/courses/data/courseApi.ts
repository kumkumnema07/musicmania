import axios from "axios";
import { getToken } from "~/utils/auth";

const API = `${import.meta.env.VITE_API_URL}/api`;

const getAuthHeader = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createCourse = (data: FormData) =>
  axios.post(`${API}/courses`, data, getAuthHeader());

export const getCourses = () =>
  axios.get(`${API}/courses`);

export const getCourseById = (id: string) =>
  axios.get(`${API}/courses/${id}`);

export const updateCourse = (id: string, data: FormData) =>
  axios.put(`${API}/courses/${id}`, data, getAuthHeader());

export const deleteCourse = (id: string) =>
  axios.delete(`${API}/courses/${id}`, getAuthHeader());



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