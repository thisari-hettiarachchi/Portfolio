import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css"; // Your CSS file

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [form, setForm] = useState({ name: "", title: "", feedback: "" });

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
      setForm({ name: "", title: "", feedback: "" });
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
      <h2 className="heading">What People Say About Me?</h2>

      <div className="feedback-container">
        {feedbacks.map((fb, index) => (
          <div key={index} className="feedback-card">
            <img src={fb.image} alt={fb.name} className="feedback-img" />
            <h3>{fb.name}</h3>
            <p className="title">{fb.role}</p>
            <p className="feedback-text">"{fb.message}"</p>
            <p className="feedback-date">"{new Date(fb.createdAt).toLocaleDateString()}"</p>
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
        <div className="feedback-popup-overlay">
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
                name="title"
                placeholder="Your Title"
                value={form.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="feedback"
                placeholder="Your Feedback"
                value={form.feedback}
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
