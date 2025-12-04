import React, { useEffect, useState } from "react";
import "./Styles/MoviesApi.css";
import { Link } from "react-router-dom";

function MoviesApi() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const API_KEY = "00cd2db9ac091981263a55f733084128";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [movies]);

  if (loading) return <h2>Loading movies...</h2>;

  const movie = movies[index];

  const handleViewMore = () => {
    const link = `https://www.themoviedb.org/movie/${movie.id}`;
    window.open(link, "_blank");
  };

  return (
    <div className="movies-wrapper">

    <div className="movie-container">
      <img
        key={movie.id}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="movie-bg"
        />

      <div className="movie-content">
        <h1 className="movie-title">{movie.title}</h1>

        <div className="buttons">
          <button className="btn play">PLAY NOW</button>
          <button className="btn watch">WATCH LATER</button>
          
        </div>

        <p className="release-date">Release: {movie.release_date}</p>

        <p className="movie-overview">{movie.overview}</p>
      </div>
     
    </div>
     <button className="btn_view" onClick={handleViewMore}>
        VIEW MORE
      </button>
        </div>
  );
}

export default MoviesApi;
