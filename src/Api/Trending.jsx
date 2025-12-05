import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/Trending.css";

const Trending = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "00cd2db9ac091981263a55f733084128";

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        const data = await response.json();
        setItems(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

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
      { breakpoint: 1300, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 896, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  // FIXED: Open TMDB Trending page
  const handleViewMore = () => {
    window.open("https://www.themoviedb.org/trending", "_blank");
  };

  return (
    <div className="trending-container">
      <h2 className="section-title">Trending Now</h2>

      <Slider {...settings}>
        {items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={item.title || item.name}
              />
              {/* Dark overlay on hover */}
              <div className="card-overlay"></div>
              <div className="hover-info">
                <h5>{item.title || item.name}</h5>
                <p>{item.media_type?.toUpperCase()}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button className="btn_view" onClick={handleViewMore}>
        VIEW MORE
      </button>
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

export default Trending;

