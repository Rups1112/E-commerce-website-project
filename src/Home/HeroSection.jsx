import React from "react";
import "../homeCss/HeroSection.css";
import "../assets/hero4.jpg"; // Import your image

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-content">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="shop-btn">Shop Now</button>

        {/* Statistics Section */}
        <div className="hero-stats">
          <div className="stat">
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div className="stat">
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div className="stat">
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img src="src\assets\hero4.jpg" alt="Fashion Models" />
      </div>
    </section>
  );
};

export default HeroSection;
