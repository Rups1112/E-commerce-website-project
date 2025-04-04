import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Login.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate & Handle Login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.mobile || formData.mobile.length < 10) {
      setErrors("Please enter a valid mobile number.");
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrors("Password must be at least 6 characters long.");
      return;
    }

    // Clear errors & Proceed with authentication (Mock login)
    setErrors("");
    console.log("Logging in with:", formData);
    alert("Login Successful!");

    // Redirect to Home Page after login
    navigate("/home"); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        {errors && <p className="login-error">{errors}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label className="login-label">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              className="login-input"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label className="login-label">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Links for Reset Password & New User */}
        <div className="login-links">
          <p onClick={() => navigate("/reset-password")} className="login-link">
            Forgot Password?
          </p>
          <p onClick={() => navigate("/sign-up")} className="login-link">
            New User? Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
