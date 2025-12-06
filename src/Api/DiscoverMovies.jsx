
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/DiscoverMovies.css";

const DiscoverMovies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const API_KEY = "00cd2db9ac091981263a55f733084128";

  useEffect(() => {
    const fetchDiscover = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        setItems(data.results || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDiscover();
  }, []);

  if (error) return <p className="error">Error: {error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2600,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  const openMovieDetails = (item) => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <div className="trending-container">
      <h2 className="section-title">Discover Movies</h2>

      <Slider {...settings}>
        {items.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => openMovieDetails(item)}
          >
            <div className="card-image">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={item.title}
              />
              <div className="card-overlay"></div>
              <div className="hover-info">
                <h5>{item.title}</h5>
                <p>MOVIE</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div className="arrow arrow-right" onClick={onClick}>
    <GrLinkNext />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow arrow-left" onClick={onClick}>
    <GrLinkPrevious />
  </div>
);

export default DiscoverMovies;

