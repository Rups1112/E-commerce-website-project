import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/ResetPassword.css"; // Import CSS file

const ResetPassword = () => {
  const navigate = useNavigate();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setEmailOrMobile(e.target.value);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrMobile) {
      setError("Please enter your email or mobile number.");
      return;
    }

    // Clear error & Show success message
    setError("");
    setSuccess("Password reset link sent to your email/mobile.");
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2 className="reset-title">Reset Password</h2>

        {error && <p className="reset-error">{error}</p>}
        {success && <p className="reset-success">{success}</p>}

        <form onSubmit={handleSubmit} className="reset-form">
          <div>
            <label className="reset-label">Email or Mobile Number</label>
            <input
              type="text"
              className="reset-input"
              value={emailOrMobile}
              onChange={handleChange}
              placeholder="Enter your email or mobile number"
            />
          </div>

          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p onClick={() => navigate("/login")} className="reset-link">
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
