import axios from "axios";
import { getToken } from "../../../utils/auth"; 

const API = import.meta.env.VITE_API_URL;

// TOKEN HEADER
const getAuthHeader = () => {
  const token = getToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// CREATE
export const createBlog = (data: FormData) => {
  return axios.post(`${API}/blogs`, data, getAuthHeader()); // ✅ FIXED
};

// GET ALL
export const getBlogs = () => {
  return axios.get(`${API}/blogs`);
};

// GET BY ID
export const getBlogById = (id: string) => {
  return axios.get(`${API}/blogs/${id}`);
};

// UPDATE
export const updateBlog = (id: string, data: FormData) => {
  return axios.put(`${API}/blogs/${id}`, data, getAuthHeader());
};

// DELETE
export const deleteBlog = (id: string) => {
  return axios.delete(`${API}/blogs/${id}`, getAuthHeader());
};