import axios from "axios";

const api = axios.create({
  baseURL: "https://portfoliobackend-git-main-thisari-hettiarachchis-projects.vercel.app/api",
  headers: { "Content-Type": "application/json" },
});

export default api;
