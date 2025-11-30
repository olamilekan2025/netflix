import React from "react";
import MainNavbar from "../components/MainNavbar";

function Shows({ onLogout }) {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
      <MainNavbar onLogout={onLogout} />

      <h1 style={{ marginTop: "100px", textAlign: "center" }}>
        Shows Page
      </h1>
    </div>
  );
}

export default Shows;


