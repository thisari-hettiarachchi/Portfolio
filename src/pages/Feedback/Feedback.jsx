import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css";
import defaultImage from "../../assets/feedback.png";

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

  // FETCH FEEDBACKS
  const fetchFeedbacks = async () => {
    const res = await axios.get("/api/feedbacks");
    setFeedbacks(res.data);
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
      await axios.post("/api/feedbacks", form);

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

      {feedbacks.length > 0 && (
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
                        alt={fb.name}
                      />
                      <div className="feedback-info">
                        <h3>{fb.name}</h3>
                        <p className="role">{fb.role}</p>
                      </div>
                    </div>

                    <p className="message">{fb.message}</p>

                    <div className="feedback-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bx ${
                            i < fb.rating
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

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
