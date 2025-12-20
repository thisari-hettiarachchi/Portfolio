import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-portolio.vercel.app/",
  headers: { "Content-Type": "application/json" },
});

const res = await api.get("/api/feedbacks");
await api.post("/api/feedbacks", form);

export default api;
