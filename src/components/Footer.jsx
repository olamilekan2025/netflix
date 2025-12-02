import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/25cdbe40-0c0a-492a-b822-f653bc3c94f0-removebg-preview.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
     

      {/* Useful links */}
      <div className="footer-contect">

         <div className="footer-logo">
        <img src={logo} alt="Website Logo" />
        {/* Social media */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/Oladunjoye Olamilekan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/oladunjoyeabduljelil?igsh=MXBhaTdnaDZ3OGpyZQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/2349129069652"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
        <div className="link-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>

        <div className="link-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="link-column">
          <h4>Explore</h4>
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">Shows</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All Rights Reserved. <span>Jel Dev</span></p>
      </div>
    </footer>
  );
}

export default Footer;
