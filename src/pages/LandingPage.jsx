import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/signup"); // navigate to signup page
  };

  return (
    <div className="landing-container">
      <LandingNavbar />

      <div className="landing-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Starts at ₦2,500. Cancel anytime.</p>

        <form className="email-form" onSubmit={handleSubmit}>
          <p className="form-text">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="form-combination">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">GET STARTED</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
