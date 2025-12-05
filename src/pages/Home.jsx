import React from "react";
import MainNavbar from "../components/MainNavbar";
import MoviesApi from "../Api/MoviesApi";
import Trending from "../Api/Trending";
import UpComing from "../Api/UpComing";
import TopRated from "../Api/TopRated";
import DiscoverMovies from "../Api/DiscoverMovies";
import "./Home.css";

function Home({ onLogout }) {
  return (
    <>
      <MainNavbar onLogout={onLogout} />

    <MoviesApi/>
    <Trending/>
    <UpComing/>
    <TopRated/>
    <DiscoverMovies/>
    </>
  );
}

export default Home;



