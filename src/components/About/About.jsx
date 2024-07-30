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
        heading="My Experience"
        details="Saptarshi Kattyayam | +91-7896909864 | kattyayan75@gmail.com"
      />

      <div className="about-main">
        <div className="about-main-left">
          <h3 className="about-sub-head">Software Engineer</h3>
          <p className="about-details">
            <b>NORDSON INDIA - Bangalore (Sept 2022 - Present)</b>.
            <br />
            <br />
            <ul style={{marginTop:"0px"}}>
              <li style={{ marginTop:"0px", marginBottom:"10px"}}>
                Nordson is specialized in Research, Design, Manufacturing and
                Service of industrial measurement systems, combining extensive
                industry experience and the latest technology. Nordson products can
                be used in all processing steps of steel, aluminum or other
                non-ferrous metals and other materials to improve production and product quality.
                </li>
                <li style={{marginBottom:"10px"}}>
                I worked on creating a next generation common UI platform from scratch for
                online measurement systems, integrating essential components for
                all Nordson software, reducing maintenance time and enhanced
                user monitoring of manufacturing <b>process proving my ability to build/enhace user interfaces.</b>
                </li>
              
              <li style={{ marginTop:"0px"}}>
                <b>Skills</b> : ReactJS, JavaScript, TypeScript, CSS, HTML, NodeJS,
                JSON, Git, SQL, Python
              </li>
            </ul>
          </p>

          <br />
          <h3 className="about-sub-head">Associate Software Engineer</h3>
          <p className="about-details">
            <b>Accenture India - Bangalore (Jun 2021 - Aug 2022)</b>.
            <br />
            <br />
            <ul style={{marginTop:"0px"}}>
              <li style={{ marginTop:"0px", marginBottom:"10px"}}>
                Created web applications, overcoming complex bugs, and fixing
                issues in diverse environments. Developed and deployed
                sharepoint web parts to translate business and functional
                qualifications into substantial deliverables.
              </li>
              <li style={{ marginTop:"0px"}}>
                <b>Skills</b> : ReactJS, JavaScript, TypeScript, CSS, HTML, ASP.NET,
                JSON, Git, SQL
              </li>
            </ul>
          </p>

          {/* <div className="contact-container">
            <div class="w3-container1">
              <h2>Email:</h2>
              <p className="about-details">kattyayan75@gmail.com</p>
            </div>

            <div class="w3-container2">
              <h2>Phone No:</h2>
              <p className="about-details">+91-7896909864</p>
            </div>
          </div> */}
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      {/* <Footer phrase="Check out my " link="Projects" toAddress="/projects" /> */}
      {/* Vector Frame*/}
      {/* <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div> */}
    </div>
  );
};
export default About;
