import React from "react";
import MainNavbar from "../components/MainNavbar";
import "./Home.css";

function Home({ onLogout }) {
  return (
    <>
      <MainNavbar onLogout={onLogout} />

      <div className="home-container">
        <h1>Welcome to Netflix Home Page</h1>
      </div>
    </>
  );
}

export default Home;



