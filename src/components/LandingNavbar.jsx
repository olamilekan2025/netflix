import React from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/25cdbe40-0c0a-492a-b822-f653bc3c94f0-removebg-preview.png"
import "./LandingNavbar.css";

function LandingNavbar() {
  const navigate = useNavigate(); 

  return (
    <nav className="landing-nav">
      <img src={logo} alt="Netflix Logo" className="nav-logo" />

     
      <button className="signup-btn" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </nav>
  );
}

export default LandingNavbar;

