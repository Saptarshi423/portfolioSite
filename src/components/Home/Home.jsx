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
          {/* This is Saptarshi, a passionate & enthusiastic Software Engineer. */}
          <div className="about-text">
            <p>
              Myself <b>Saptarshi Kattyayan</b> a Software Engineer with 3+ years of
              industry experience in building web applications, overcoming
              complex bugs, and fixing issues in diverse environments. Capable
              of creating, developing and deploying highly available systems to
              translate business needs.
            </p>
          </div>
        </div>
        <div className="head-btns">
          <a
            href="https://drive.google.com/file/d/1PPc4X1RqfnC4tEzoKigJRXw1o4SPt8f-/view?usp=sharing"
            className="btn btn-white"
          >
            <p className="btn-text">View My Resume</p>
          </a>
          <Link to="/contact" className="btn btn-white">
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
