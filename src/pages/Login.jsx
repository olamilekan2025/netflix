import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../assets/25cdbe40-0c0a-492a-b822-f653bc3c94f0-removebg-preview.png";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); 
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      navigate("/home");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
<Link to="/signup">
  <img src={logo} alt="Netflix Logo" className="login-logo" />
</Link>


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

        
        <div className="login-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        
        <div className="form-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
        </div>

        <button type="submit" className="login-to-home-btn">Sign In</button>
      </form>
    </div>
  );
}

export default Login;

