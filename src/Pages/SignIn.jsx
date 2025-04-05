import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Pages/SignIn.css"; // Import the CSS file
import { registerUser } from "../Apis/userApi.api";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.contactNo.length < 10) newErrors.contactNo = "Invalid contact number";
    if (!formData.address) newErrors.address = "Address is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  // Handle Form Submit
  const handleSubmit =async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      const response = await registerUser(formData);
      console.log(response.data);
      setSuccess("Registration Successful!");
      setErrors({});
      // console.log("User Data:", formData);

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setErrors(newErrors);
      setSuccess("");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>

        {success && <p className="signup-success">{success}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div>
            <label className="signup-label">Name</label>
            <input 
              type="text" 
              name="fullName" 
              className="signup-input" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Enter your name"
            />
            {errors.fullName && <p className="signup-error">{errors.fullName}</p>}
          </div>

          <div>
            <label className="signup-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="signup-input" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email"
            />
            {errors.email && <p className="signup-error">{errors.email}</p>}
          </div>

          <div>
            <label className="signup-label">Contact</label>
            <input 
              type="text" 
              name="contactNo" 
              className="signup-input" 
              value={formData.contactNo} 
              onChange={handleChange} 
              placeholder="Enter your contact number"
            />
            {errors.contactNo && <p className="signup-error">{errors.contactNo}</p>}
          </div>

          <div>
            <label className="signup-label">Address</label>
            <input 
              type="text" 
              name="address" 
              className="signup-input" 
              value={formData.address} 
              onChange={handleChange} 
              placeholder="Enter your address"
            />
            {errors.address && <p className="signup-error">{errors.address}</p>}
          </div>

          <div>
            <label className="signup-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="signup-input" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter your password"
            />
            {errors.password && <p className="signup-error">{errors.password}</p>}
          </div>

          <button type="submit" className="signup-button">
            Register
          </button>

          {/* Already a user? Redirect to login page */}
          <p className="signup-login-link">
            Already a user?{" "}
            <span onClick={() => navigate("/login")} className="signup-login-text">
            Login here 
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;