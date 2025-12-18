import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css";
import defaultImage from "../../assets/feedback.png"; // ✅ DEFAULT IMAGE

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    image: null,
    rating: 0,
  });

  /* ---------------- FETCH FEEDBACKS ---------------- */
  const fetchFeedbacks = async () => {
    const res = await axios.get("http://localhost:5000/feedbacks");
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
    setForm({ ...form, [name]: name === "rating" ? Number(value) : value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("message", form.message);
      formData.append("rating", form.rating);

      if (form.image) {
        formData.append("image", form.image);
      }

      await axios.post("http://localhost:5000/feedbacks", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setForm({ name: "", role: "", message: "", image: null, rating: 5 });
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
                    <img
                      src={
                        fb.image
                          ? `http://localhost:5000${fb.image}`
                          : defaultImage
                      }
                      className="feedback-avatar"
                      alt={fb.name}
                    />
                    <h3>{fb.name}</h3>
                    <p className="role">{fb.role}</p>
                    <p>"{fb.message}"</p>

                    <div className="feedback-rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < fb.rating ? "filled-star" : ""}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {feedbacks.length > 1 && (
            <div className="feedback-indicators">
              {feedbacks.map((_, i) => (
                <span
                  key={i}
                  className={`indicator ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <button className="feedback-btn" onClick={() => setIsPopupOpen(true)}>
        Add Review <i className="bx bx-plus"></i>
      </button>

      {isPopupOpen && (
        <div className="feedback-popup-overlay active">
          <div className="feedback-popup">
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
              &times;
            </button>

            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
              <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />

              <div className="feedback-rating-selector">
                <span className="rating-label">Rating:</span>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <span
                      key={starVal}
                      className={`rating-star ${form.rating >= starVal ? "active" : ""}`}
                      onClick={() => setForm({ ...form, rating: starVal })}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <input type="file" accept="image/*" onChange={handleFileChange} />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
