import { getValueFromLocalStorage } from "@/lib/helper";
import { store } from "@/redux/store";
import axios from "axios";

const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api", // Replace with your base URL
  // baseURL: "http://4.255.254.149:4000/api" ,
  //   timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add request interceptors (optional)
backend.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token; // Replace with logic to retrieve the token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptors (optional)
backend.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default backend;
