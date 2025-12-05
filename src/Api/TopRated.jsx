import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/TopRated.css";

const TopRated = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "00cd2db9ac091981263a55f733084128";

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        setItems(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, []);

  if (loading) return <p className="torated-loading">Loading...</p>;
  if (error) return <p className="torated-error">Error: {error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

  const handleViewMore = () => {
    window.open("https://www.themoviedb.org/movie/top-rated", "_blank");
  };

  return (
    <div className="toprated-container">
      <h2 className="toprated-section-title">Top Rated Movies</h2>

      <Slider {...settings}>
        {items.map((item) => (
          <div className="toprated-card" key={item.id}>
            <div className="toprated-card-image">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={item.title}
              />
              <div className="toprated-card-overlay"></div>
              <div className="toprated-hover-info">
                <h5>{item.title}</h5>
                <p>MOVIE</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button className="toprated-btn-view" onClick={handleViewMore}>
        VIEW MORE
      </button>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div className="toprated-arrow toprated-arrow-right" onClick={onClick}>
    <GrLinkNext />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="toprated-arrow toprated-arrow-left" onClick={onClick}>
    <GrLinkPrevious />
  </div>
);

export default TopRated;
