import React, { useEffect, useState } from "react";
import "./AdminFeedback.css";

const AdminFeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendURL = import.meta.env.VITE_API_URL;

  // Fetch all feedbacks (approved & unapproved)
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken"); // or sessionStorage
      
      const res = await fetch(`${backendURL}/api/feedbacks/admin/getall`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to fetch feedbacks");

      const data = await res.json();
      console.log("Fetched feedbacks:", data);
      setFeedbacks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setFeedbacks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Toggle approve/unapprove
  const handleToggleApprove = async (id, approved) => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      // Optimistically update frontend
      setFeedbacks(prev =>
        prev.map(fb =>
          fb._id === id ? { ...fb, approved: !approved } : fb
        )
      );

      const action = approved ? "unapprove" : "approve";

      const res = await fetch(`${backendURL}/api/feedbacks/admin/${id}/${action}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.message || "Failed to update feedback status");
      }
    } catch (err) {
      alert(err.message);
      // Revert frontend change if backend fails
      setFeedbacks(prev =>
        prev.map(fb =>
          fb._id === id ? { ...fb, approved: approved } : fb
        )
      );
    }
  };

  // Delete feedback
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      const res = await fetch(`${backendURL}/api/feedbacks/admin/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.message || "Failed to delete feedback");
      }

      // Remove from frontend
      setFeedbacks(prev => prev.filter(fb => fb._id !== id));
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
                    <button
                      className={fb.approved ? "unapprove-btn" : "approve-btn"}
                      onClick={() => handleToggleApprove(fb._id, fb.approved)}
                    >
                      {fb.approved ? "Unapprove" : "Approve"}
                    </button>
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
