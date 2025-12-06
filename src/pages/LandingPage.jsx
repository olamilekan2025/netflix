import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import { useNavigate } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import FilmDataXFAQ from "./FilmDataXFAQ";
import UpComing from "../Api/UpComing";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <>
      <div className="landing-container">
        <LandingNavbar />

        <div className="landing-content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Starts at ₦2,500. Cancel anytime.</p>

          <form className="email-form" onSubmit={handleSubmit}>
            <p className="form-text">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="form-combination">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">
                Get Stated <FaAnglesRight />
              </button>
            </div>
          </form>
        </div>
      </div>
     
   

      <div className="upComing-container">
       

        <UpComing />
         <button
          className="btn-view-all-signup"
          onClick={() => navigate("/signup")}
        >
         <p> View All</p>
        </button>
      </div>

      <div className="moreReasons">
        <section className="reasons-section">
          <h2 className="reasons-title">Why Join Filmdatax?</h2>

          <div className="reasons-grid">
            <div className="reason-card">
              <div className="text">
                <h3>Unlimited Movies & TV Shows</h3>
                <p>
                  Always something new to watch. Stream anytime across all your
                  devices.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQk2jooxiW67dRMCyHgz_z6XNUtMaqlTnh5LMY-ib1UTYAFvsN_"
                  alt=""
                />
              </div>
            </div>

            <div className="reason-card">
              <div className="text">
                <h3>Watch Anywhere</h3>
                <p>
                  Available on Smart TVs, PlayStation, Xbox, Chromecast, Apple
                  TV and more.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/divio4grm/image/upload/v1764770795/cream-tube-makeup-product-isolated-icon-free-vector-removebg-preview_zmafs2.png"
                  alt=""
                />
              </div>
            </div>

            <div className="reason-card">
              <div className="text">
                <h3>Download & Watch Offline</h3>
                <p>
                  Save your favorite movies and series to watch without
                  internet.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/divio4grm/image/upload/v1764771042/istockphoto-1145772186-170x170-removebg-preview_igy2nu.png"
                  alt=""
                />
              </div>
            </div>

            <div className="reason-card">
              <div className="text">
                <h3>No Ads. No Interruptions.</h3>
                <p>Enjoy seamless streaming with zero advertisements.</p>
              </div>
              <div className="image">
                <img
                  src="https://c1.neweggimages.com/BizIntell/item/Gift%20Cards/Gift%20Cards%20-%20Online/88-124-003/4a4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <FilmDataXFAQ />
    </>
  );
}

export default LandingPage;
