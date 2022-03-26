import React from "react";
import "./Header.css";

export const Header = ({ heading, details }) => {
  return (
    <div className="header-container">
      <h1>
        <b>{heading}</b>
      </h1>
      <p>{details}</p>
    </div>
  );
};
