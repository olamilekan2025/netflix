
import React, { useState } from "react";
import logo from "../assets/25cdbe40-0c0a-492a-b822-f653bc3c94f0-removebg-preview.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./MainNavbar.css";

function MainNavbar({ onLogout }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <nav className="main-nav">

      
      <div className="nav-left">
        <img src={logo} alt="Netflix Logo" className="nav-logo" />
      </div>

      
      <div className={isMobile ? "navbar mobile-active" : "navbar"}>
        <NavLink to="/home" className="nav-link">Home</NavLink>
        {/* <NavLink to="/shows" className="nav-link">Shows</NavLink> */}
        {/* <NavLink to="/movies" className="nav-link">Movies</NavLink> */}
        <NavLink to="/new-popular" className="nav-link">New & Popular</NavLink>

        
        <button className="logouts-btn mobile-logout" onClick={onLogout}>
          Logout
        </button>
      </div>

    
      <div className="menu-toggle" onClick={handleToggleMenu}>
        {isMobile ? <IoClose size={28} /> : <IoMenu size={28} />}
      </div>

      
      <button className="logout-btn desktop-logout" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default MainNavbar;

