import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css"; // Your CSS file

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/feedbacks")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log(err));
  }, []);

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
            <p className="feedback-date">"{fb.createdAt}"</p>
          </div>
        ))}
      </div>
      <a href="./FeedbackForm/#feedback-form" className="feedback-btn">
          <span>Add Review</span>
          <i class="bx bxs-plus-circle bx-tada "/>
        </a>
    </section>
  );
};

export default Feedback;
