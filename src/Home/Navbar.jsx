import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom"; // For navigation
import "../homeCss/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Black Bar */}
      <div className="top-bar" onClick={() => navigate("/sign-up")}>
        <p>Sign up & get 10% off on your first order!</p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <h1 className="logo">SHOP.CO</h1>

        <ul className="nav-links">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <div className="search-cart">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for products..." />
          </div>
          <FaShoppingCart className="cart-icon" onClick={() => navigate("/cart")} />
          <FaUser className="user-icon" onClick={() => navigate("/login")} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
