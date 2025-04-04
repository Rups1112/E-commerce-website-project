import React, { useState } from "react";
import "../Pages/SignIn.css"; // Import the CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
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
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.contact.length < 10) newErrors.contact = "Invalid contact number";
    if (!formData.address) newErrors.address = "Address is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSuccess("Registration Successful!");
      setErrors({});
      console.log("User Data:", formData);
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
              name="name" 
              className="signup-input" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name"
            />
            {errors.name && <p className="signup-error">{errors.name}</p>}
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
              name="contact" 
              className="signup-input" 
              value={formData.contact} 
              onChange={handleChange} 
              placeholder="Enter your contact number"
            />
            {errors.contact && <p className="signup-error">{errors.contact}</p>}
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
