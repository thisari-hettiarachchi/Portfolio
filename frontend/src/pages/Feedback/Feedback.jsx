import React, { useEffect, useState } from "react";
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
    rating: 0,
  });

  const backendURL = import.meta.env.VITE_DEPLOYED_API_URL;

  // Fetch feedbacks
  const fetchFeedbacks = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_DEPLOYED_API_URL}/api/feedbacks/get`);
      const data = await res.json();
      setFeedbacks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Carousel auto-slide
  useEffect(() => {
    if (feedbacks.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [feedbacks, isPaused]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle star rating click
  const handleStarClick = (rating) => {
    setForm({ ...form, rating });
  };

  // Submit feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_DEPLOYED_API_URL}/api/feedbacks/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Error submitting feedback");
      }

      alert("Feedback submitted successfully!");
      setForm({ name: "", role: "", message: "", rating: 5 });
      setIsPopupOpen(false);
      fetchFeedbacks();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="feedback-section">
      <h2 className="heading">
        <i className="bx bxs-comment"></i> Testimonial
      </h2>

      {/* Carousel */}
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
                        alt={fb.name || "User"}
                        className="feedback-avatar"
                      />
                      <div className="feedback-info">
                        <h3>{fb.name || "Anonymous"}</h3>
                        <p className="role">{fb.role || "User"}</p>
                      </div>
                    </div>
                    <p className="message">{fb.message}</p>
                    <div className="feedback-rating">
                      {[...Array(5)].map((_, idx) => (
                        <i
                          key={idx}
                          className={`bx ${
                            idx < (fb.rating || 0)
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

      {/* Add Review Button */}
      <button className="feedback-btn" onClick={() => setIsPopupOpen(true)}>
        Add Review <i className="bx bx-plus"></i>
      </button>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="feedback-popup-overlay active">
          <div className="feedback-popup">
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
              &times;
            </button>

            <form onSubmit={handleSubmit} className="feedback-form">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Role Input */}
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Your Role"
                  value={form.role}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Feedback"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Rating */}
              <div className="form-group">
                <label>Rating</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleStarClick(star)}
                      style={{
                        cursor: "pointer",
                        fontSize: "2rem",
                        color: star <= form.rating ? "#fbbf24" : "#4a5568",
                      }}
                    >
                      {star <= form.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn">
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