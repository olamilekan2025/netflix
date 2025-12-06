import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";
import "./MovieDetails.css";

const API_KEY = "00cd2db9ac091981263a55f733084128";

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(location.state || null);

  useEffect(() => {
    if (movie) return;

    const fetchDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
    };

    fetchDetails();
  }, [id, movie]);

  if (!movie) return <div className="details-loading">Loading...</div>;

  return (
    <>
      <MainNavbar />

      <div className="details-container">
        <div className="details-wrapper">
          <img
            className="details-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="details-info">
            <h1 className="details-title">{movie.title}</h1>

            <div className="details-meta">
              <span className="rating">⭐ {movie.vote_average}</span>
              <span className="release">📅 {movie.release_date}</span>
            </div>

          
            <h3 className="overview-title">Overview</h3>
            <p className="overview-text">{movie.overview}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MovieDetails;
