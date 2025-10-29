import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_DEVELOPMENT_BACKEND_URL,
  withCredentials: true,
});

export default API;
