// AdminFeedbackDashboard.jsx
import React, { useEffect, useState } from "react";
import "./AdminFeedback.css";

const AdminFeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendURL = import.meta.env.VITE_API_URL;

  // Fetch all feedbacks (admin)
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendURL}/api/feedbacks/admin/getall`, {
        credentials: "include",
      });
      const data = await res.json();
      setFeedbacks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
      setFeedbacks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Approve feedback
  const handleApprove = async (id) => {
    try {
      const res = await fetch(`${backendURL}/api/feedbacks/admin/${id}/approve`, {
        method: "PUT",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to approve feedback");
      fetchFeedbacks();
    } catch (err) {
      alert(err.message);
    }
  };

  // Delete feedback
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      const res = await fetch(`${backendURL}/api/feedbacks/admin/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to delete feedback");
      fetchFeedbacks();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="admin-feedback-dashboard">
      <h2>Admin Feedback Dashboard</h2>

      {loading ? (
        <p className="loading-text">Loading feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p className="loading-text">No feedbacks found.</p>
      ) : (
        <div className="table-container">
          <table className="feedback-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Message</th>
                <th>Rating</th>
                <th>Approved</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((fb) => (
                <tr key={fb._id}>
                  <td>{fb.name}</td>
                  <td>{fb.role}</td>
                  <td>{fb.message}</td>
                  <td>{fb.rating}</td>
                  <td>{fb.approved ? "✅" : "❌"}</td>
                  <td>
                    {!fb.approved && (
                      <button
                        className="approve-btn"
                        onClick={() => handleApprove(fb._id)}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(fb._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminFeedbackDashboard;
