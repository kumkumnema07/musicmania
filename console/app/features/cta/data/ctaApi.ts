import axios from "axios";

// ✅ ENV API
const API = import.meta.env.VITE_API_URL;

// ✅ TOKEN HEADER
const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// =======================
// 📥 GET CTA (PUBLIC)
// =======================
export const getCTA = () => {
  return axios.get(`${API}/cta`);
};

// =======================
// 📤 CREATE / UPDATE CTA
// =======================
export const createCTA = (data: FormData) => {
  return axios.post(`${API}/cta`, data, getAuthHeader());
};



// import axios from "axios";

// const API = "http://localhost:5000/api/cta";

// export const getCTA = () => axios.get(API);
// export const createCTA = (data: FormData) => axios.post(API, data);
// export const updateCTA = (id: string, data: FormData) =>
//   axios.put(`${API}/${id}`, data);