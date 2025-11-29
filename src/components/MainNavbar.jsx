import React from "react";
import logo from "../assets/Netflex-removebg-preview.png";
import "./MainNavbar.css";

function MainNavbar({ onLogout }) {
  return (
    <nav className="main-nav">
      <img src={logo} alt="Netflix Logo" className="nav-logo" />

      <ul className="nav-links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>

      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default MainNavbar;
