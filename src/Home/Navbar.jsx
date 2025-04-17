import React, { useState, useEffect } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../homeCss/Navbar.css";
import KilosPage from "../CategoryProductPages/KilosPage";


export default function Navbar() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
  const navigate = useNavigate();
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, [window.location.href]);

  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage data
    setUserData(null);
    navigate("/login");
  };



  return (
    <>
      <nav className="navbar">
        {/* Main Navbar */}
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo" onClick={() => navigate("/")}><span id="k">KR</span><span id="z">zy</span><span id="kart">Kart</span>.co</div>
          {/* Desktop Menu */}
          <ul className="menu">
            <li onClick={() => navigate("/category/kilos")}>PRODUCTS</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>BEAUTY</li>
          </ul>
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for products, brands and more" />
          </div>
          {/* Icons with labels */}
          <div className="icons">
            {userData ? (
              <div className="icon-item" onClick={() => setShowAccountInfo(!showAccountInfo)}>
                <FaUser />
                <span>Account</span>
                {showAccountInfo && (
                  <div className="account-info">
                    <h1>Account Information</h1>
                    <p>Name: {userData.fullName}</p>
                    <p>Email: {userData.email}</p>
                    <p>Contact: {userData.contactNo}</p>
                    <p>Address: {userData.address}</p>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="icon-item" onClick={() => navigate("/login")}>
                <FaUser />
                <span>Login</span>
              </div>
            )}
            <div className="icon-item">
              <FaHeart />
              <span>Wishlist</span>
            </div>
            <div className="icon-item" onClick={() => navigate("/cart")}>
              <FaShoppingBag />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


