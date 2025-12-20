import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-portolio.vercel.app",
  headers: { "Content-Type": "application/json" },
});

export default api;


