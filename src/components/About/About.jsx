import React from "react";
import "./About.css";
import { Header } from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import { Footer } from "../Footer/Footer";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        details="Software Engineer | Tech Enthusiast | Problem Solver"
      />

      <div className="about-main">
        <div className="about-main-left">
          <h3 className="about-sub-head">Software Engineer</h3>
          <p className="about-details">
            I am <b>SAPTARSHI KATTYAYAN</b>.
            <br />
            <br />
            Currently a Software Engineer at Accenture , having 1+ years of
            industry experience in building web applications, overcoming complex
            bugs, and fixing issues in diverse environments. Capable of
            creating, developing and deploying highly available services to
            translate business and functional qualifications into substantial
            deliverables.
          </p>

          <div className="contact-container">
            <div class="w3-container1">
              <h2>Email:</h2>
              <p className="about-details">kattyayan75@gmail.com</p>
            </div>

            <div class="w3-container2">
              <h2>Phone No:</h2>
              <p className="about-details">+91-7896909864</p>
            </div>
          </div>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <Footer phrase="Check out my " link="Projects" toAddress="/projects" />
      {/* Vector Frame*/}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};
export default About;
