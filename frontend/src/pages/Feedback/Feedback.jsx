import React, { useEffect, useState } from "react";
import api from "../../utils/axios"; 
import "./Feedback.css";
import defaultImage from "../../assets/feedback.png";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]); // always an array
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    rating: 5, // default rating
  });

  const fetchFeedbacks = async () => {
    try {
      const res = await api.get("/feedbacks"); // use api instance
      setFeedbacks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
      setFeedbacks([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/feedbacks", form); // use api instance
      setForm({ name: "", role: "", message: "", rating: 5 });
      setIsPopupOpen(false);
      fetchFeedbacks();
    } catch (err) {
      alert(err.response?.data?.error || "Error submitting feedback");
    }
  };

  return (
    <section className="feedback-section">
      <h2 className="heading">
        <i className="bx bxs-comment"></i> Testimonial
      </h2>

      {/* Carousel */}
      {Array.isArray(feedbacks) && feedbacks.length > 0 && (
        <div
          className="feedback-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="feedback-carousel">
            <div
              className="feedback-carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {feedbacks.map((fb, i) => (
                <div className="feedback-slide" key={i}>
                  <div className="feedback-card">
                    <div className="feedback-header">
                      <img
                        src={defaultImage}
                        className="feedback-avatar"
                        alt={fb.name || "User"}
                      />
                      <div className="feedback-info">
                        <h3>{fb.name || "Anonymous"}</h3>
                        <p className="role">{fb.role || "User"}</p>
                      </div>
                    </div>

                    <p className="message">{fb.message || ""}</p>

                    <div className="feedback-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bx ${
                            i < (fb.rating || 0)
                              ? "bxs-star filled-star"
                              : "bx-star empty-star"
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="feedback-btn" onClick={() => setIsPopupOpen(true)}>
        Add Review <i className="bx bx-plus"></i>
      </button>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="feedback-popup-overlay active">
          <div className="feedback-popup">
            <button
              className="close-btn"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </button>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              {/* Rating Label and Stars */}
              <label className="rating-label">Rating:</label>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`bx ${
                      i < form.rating
                        ? "bxs-star filled-star"
                        : "bx-star empty-star"
                    }`}
                    onClick={() => setForm({ ...form, rating: i + 1 })}
                    style={{
                      cursor: "pointer",
                      fontSize: "1.5rem",
                      marginRight: "4px",
                    }}
                  ></i>
                ))}
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
