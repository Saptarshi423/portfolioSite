import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "../../assets/home_anime.gif";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="header-text">
          <h1>Welcome to my Portfolio</h1>
          <p>
            This is Saptarshi, a passionate & enthusiastic Software Engineer.
          </p>
        </div>
        <div className="head-btns">
          <a
            href="https://drive.google.com/file/d/1IZofPWtvuJSmG5BUV5JTKFH8_k007H8k/view?usp=sharing"
            className="btn btn-white"
          >
            <p className="btn-text">View My Resume</p>
          </a>
          <Link to="/contact" className="btn btn-transparent">
            <p className="btn-text">Connect with me</p>
          </Link>
        </div>
        <div className="splash-image">
          <img src={homeAnime} alt="animation" className="home-anime" />
        </div>
      </div>
    );
  }
}

export default Home;
