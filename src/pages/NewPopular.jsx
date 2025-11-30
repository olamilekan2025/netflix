import React from "react";
import MainNavbar from "../components/MainNavbar";

function NewPopular({ onLogout }) {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
      <MainNavbar onLogout={onLogout} />

      <h1 style={{ marginTop: "100px", textAlign: "center" }}>
        New & Popular Page
      </h1>
    </div>
  );
}

export default NewPopular;


