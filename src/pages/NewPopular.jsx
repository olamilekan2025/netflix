import React from "react";
import MainNavbar from "../components/MainNavbar";
import TvShows from "../Api/TvShows";
import "./NewPopular.css"

function NewPopular({ onLogout }) {
  return (
   <>
   <MainNavbar/>
  <div className="NewPopular-container">
  <img
    src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/10/Stranger-Things-5-Official-Poster-Header-FUTURE-OF-THE-FORCE.jpg?fit=1920,1080&ssl=1"
    alt=""
  />
  <div className="newpopular-overlay">
    <h2>FILMDATAX</h2>
  </div>
</div>

   <TvShows/>
   </>
  );
}

export default NewPopular;


