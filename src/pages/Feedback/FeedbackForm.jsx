import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", title: "", feedback: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/feedback", form)
      .then(res => {
        alert("Feedback added!");
        setForm({ name: "", title: "", feedback: "" });
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} name="feedback-form">
      <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input name="title" placeholder="Your Title" value={form.title} onChange={handleChange} required />
      <textarea name="feedback" placeholder="Your Feedback" value={form.feedback} onChange={handleChange} required />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
