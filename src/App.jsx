import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
import HeroSection from "./Home/HeroSection";
import Brands from "./Home/Brands";
import NewArrivals from "./Home/NewArrivals";
import TopSelling from "./Home/TopSelling";
import DressStyles from "./Home/DressStyles";
import Testimonials from "./Home/Testimonials";
import Footer from "./Home/Footer";
import SignUp from "../src/Pages/SignIn"; 
import Login from "../src/Pages/Login";
import ResetPassword from "../src/Pages/RestPassword";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="bg-gray-100">
            <HeroSection />
            <Brands />
            <NewArrivals />
            <TopSelling />
            <DressStyles />
            <Testimonials />
            <Footer />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
