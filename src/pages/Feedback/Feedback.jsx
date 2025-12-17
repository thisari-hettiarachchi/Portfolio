import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", message: "" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch feedbacks from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedbacks")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log(err));
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    if (feedbacks.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % feedbacks.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [feedbacks.length, isPaused]);

  // Handle form changes
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit feedback
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/feedbacks", form);
      alert("Feedback added!");
      setForm({ name: "", role: "", message: "" });
      setIsPopupOpen(false);

      const res = await axios.get("http://localhost:5000/feedbacks");
      setFeedbacks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const goToSlide = index => {
    setCurrentSlide(index);
  };

  return (
    <section className="feedback-section">
      <h2 className="heading">
        <i className="bx bxs-comment"></i> Testimonial
      </h2>

      {feedbacks.length > 0 ? (
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
              {feedbacks.map((fb, index) => (
                <div key={index} className="feedback-slide">
                  <div className="feedback-card">
                    <h3>{fb.name}</h3>
                    <p className="role">{fb.role}</p>
                    <p className="feedback-text">"{fb.message}"</p>
                    <p className="feedback-date">
                      {fb.createdAt ? new Date(fb.createdAt).toLocaleDateString() : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {feedbacks.length > 1 && (
            <>
              <button className="carousel-btn prev-btn" onClick={prevSlide}>
                <i className="bx bx-chevron-left"></i>
              </button>
              <button className="carousel-btn next-btn" onClick={nextSlide}>
                <i className="bx bx-chevron-right"></i>
              </button>

              <div className="carousel-dots">
                {feedbacks.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <p style={{ color: "var(--text-primary)", textAlign: "center", marginTop: "2rem" }}>
          No testimonials yet. Be the first to add one!
        </p>
      )}

      <button
        className="feedback-btn"
        type="button"
        onClick={() => setIsPopupOpen(true)}
      >
        <span>Add Review</span>
        <i className="bx bxs-plus-circle bx-tada" />
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
            <form id="feedback-popup-form" onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="role"
                placeholder="Your Role"
                value={form.role}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit Feedback</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;