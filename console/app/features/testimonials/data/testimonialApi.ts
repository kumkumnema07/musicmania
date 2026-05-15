import axios from "axios";

const API = "http://localhost:5000/api/testimonials";

// 🔥 GET ALL
export const getTestimonials = () => {
  return axios.get(API);
};

// 🔥 GET SINGLE (edit ke liye)
export const getTestimonialById = (id: string) => {
  return axios.get(`${API}/${id}`);
};

// 🔥 CREATE
export const createTestimonial = (data: FormData) => {
  return axios.post(API, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 🔥 UPDATE
export const updateTestimonial = (id: string, data: FormData) => {
  return axios.put(`${API}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 🔥 DELETE
export const deleteTestimonial = (id: string) => {
  return axios.delete(`${API}/${id}`);
};