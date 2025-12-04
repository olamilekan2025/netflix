import React from "react";
import MainNavbar from "../components/MainNavbar";
import MoviesApi from "../Api/MoviesApi";
import "./Home.css";

function Home({ onLogout }) {
  return (
    <>
      <MainNavbar onLogout={onLogout} />

    <MoviesApi/>
    </>
  );
}

export default Home;



