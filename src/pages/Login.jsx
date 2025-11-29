import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import "./Login.css";
import logo from "../assets/Netflex-removebg-preview.png";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/home"); 
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Netflix Logo" className="login-logo" />

      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Sign In</button>
      </form>
    </div>
  );
}

export default Login;



