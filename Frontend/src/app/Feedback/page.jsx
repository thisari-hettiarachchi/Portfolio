import React, { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../../../Frontend/src/assets/feedback.png";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    rating: 5,
  });

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("/api/feedbacks");
      setFeedbacks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    if (feedbacks.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [feedbacks, isPaused]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRating = (value) => {
    setForm({ ...form, rating: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/feedbacks", form);
      setForm({ name: "", role: "", message: "", rating: 5 });
      setIsPopupOpen(false);
      fetchFeedbacks();
    } catch (err) {
      alert(err.response?.data?.error || "Error submitting feedback");
    }
  };

  return (
    <section className="bg-gray-900 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 flex items-center gap-2">
        <i className="bx bxs-comment text-3xl md:text-4xl"></i> Testimonial
      </h2>

      {feedbacks.length > 0 && (
        <div
          className="relative max-w-3xl w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {feedbacks.map((fb, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full px-4 flex justify-center"
              >
                <div className="bg-gradient-to-br from-cyan-100/10 to-blue-100/5 border border-cyan-300/20 rounded-2xl p-8 shadow-xl flex flex-col items-center gap-4 transform transition-all hover:-translate-y-2 hover:scale-105">
                  <img
                    src={defaultImage}
                    alt={fb.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white">{fb.name}</h3>
                  <p className="uppercase tracking-wider text-cyan-400 font-semibold">
                    {fb.role}
                  </p>
                  <p className="text-cyan-300 italic text-center opacity-80 mt-2">
                    "{fb.message}"
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, star) => (
                      <i
                        key={star}
                        className={`bx text-xl ${
                          star < fb.rating
                            ? "bxs-star text-yellow-400"
                            : "bx-star text-gray-400"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        className="mt-8 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold flex items-center gap-2 transition"
        onClick={() => setIsPopupOpen(true)}
      >
        Add Review <i className="bx bx-plus"></i>
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md relative flex flex-col gap-4">
            <button
              className="absolute top-2 right-3 text-3xl text-white"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </button>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="p-3 rounded-md bg-gray-900 border border-cyan-400 text-white"
                required
              />
              <input
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={handleChange}
                className="p-3 rounded-md bg-gray-900 border border-cyan-400 text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="p-3 rounded-md bg-gray-900 border border-cyan-400 text-white resize-none"
                required
              />
              <div className="flex gap-2">
                {[...Array(5)].map((_, star) => (
                  <i
                    key={star}
                    className={`bx text-2xl cursor-pointer ${
                      star < form.rating
                        ? "bxs-star text-yellow-400"
                        : "bx-star text-gray-400"
                    }`}
                    onClick={() => handleRating(star + 1)}
                  ></i>
                ))}
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-md font-semibold mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
