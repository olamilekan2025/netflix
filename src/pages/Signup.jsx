import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/authStore"; 
import "./Signup.css";
import logo from "../assets/Netflex-removebg-preview.png";

function Signup() {
  const navigate = useNavigate();
  const signup = useAuthStore(state => state.signup);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = signup(formData.fullName, formData.email, formData.password);
    if (!success) {
      setError("User already exists!");
      return;
    }

    alert("Account created successfully! Please login.");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="Netflix Logo" className="signup-logo" />

      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;

