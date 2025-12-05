import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Styles/TvShows.css";

const TvShows = () => {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "00cd2db9ac091981263a55f733084128";

  useEffect(() => {
    const fetchPopularTV = async () => {
      try {
        const totalPages = 5;
        const promises = [];

        for (let page = 1; page <= totalPages; page++) {
          promises.push(
            fetch(
              `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`
            ).then((res) => res.json())
          );
        }

        const results = await Promise.all(promises);
        const allResults = results.flatMap((data) => data.results || []);
        setItems(allResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularTV();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 150 &&
        !loadingMore &&
        visibleCount < items.length
      ) {
        setLoadingMore(true);

        setTimeout(() => {
          setVisibleCount((prev) => prev + 10);
          setLoadingMore(false);
        }, 1200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore, visibleCount, items.length]);

  if (loading)
    return (
      <div className="tvShows-container">
        <h2 className="tvShows-section-title">Popular TV Shows</h2>

        <div className="tv-grid">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="tvShows-card" key={index}>
              <Skeleton height={350} />
              <div className="tvShows-hover-info">
                <Skeleton width={120} height={20} />
                <Skeleton width={80} height={15} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="tvShows-container">
      <h2 className="tvShows-section-title">Popular TV Shows</h2>

      <div className="tv-grid">
        {items.slice(0, visibleCount).map((item) => (
          <div className="tvShows-card" key={item.id}>
            <div className="tvShows-card-image">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={item.name}
              />
              <div className="tvShows-card-overlay"></div>
              <div className="tvShows-hover-info">
                <h5>{item.name}</h5>
                <p>TV SHOW</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loadingMore && (
        <div className="loading-spinner">
          <Oval
            height={50}
            width={50}
            color="#e50914"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ff8080"
            strokeWidth={3}
            strokeWidthSecondary={3}
          />
        </div>
      )}
    </div>
  );
};

export default TvShows;
