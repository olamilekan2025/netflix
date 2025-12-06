import React from "react";
import "./Loader.css"
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
      }}
    >
      <div className="custom-loader"></div>
    </div>
  );
}

export default Loader;
