import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css"; // Your CSS file

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", message: "" });

  // Fetch feedbacks from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedbacks")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log(err));
  }, []);

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

      // Refresh feedback list
      const res = await axios.get("http://localhost:5000/feedbacks");
      setFeedbacks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="feedback-section">
      <h2 className="heading">
       <i className="bx bxs-comment"></i> Testimonial
      </h2>


      <div className="feedback-container">
        {feedbacks.map((fb, index) => (
          <div key={index} className="feedback-card">
            <img src={fb.image} alt={fb.name} className="feedback-img" />
            <h3>{fb.name}</h3>
            <p className="role">{fb.role}</p>
            <p className="feedback-text">"{fb.message}"</p>
            <p className="feedback-date">{fb.createdAt ? new Date(fb.createdAt).toLocaleDateString() : ""}</p>
          </div>
        ))}
      </div>

      {/* Add Review Button */}
      <button
        className="feedback-btn"
        type="button"
        onClick={() => setIsPopupOpen(true)}
        >
        <span>Add Review</span>
        <i className="bx bxs-plus-circle bx-tada" />
      </button>

      {/* Popup */}
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
