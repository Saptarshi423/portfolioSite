import React from "react";
import "./Contact.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import medium from "./../../assets/me.png";

export const Contact = () => {
  return (
    <div className="section-container">
      <Header
        heading="Get in touch"
        details="Want to connect? Feel free to drop me an email."
      />
      {/* CONTACT FORM */}

      <div className="contact-form-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/xbjwalwa"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email id"
            className="input-box email-input"
          />
          <textarea
            type="text"
            placeholder="Your message"
            name="message"
            className="input-box body-input"
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      {/* Social Icons */}

      <div className="social-icons-container">
        <a href="https://github.com/Saptarshi423" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/saptarshi-kattyayan-3220a6163/"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
        <a href="https://medium.com/@kattyayan75" className="social-icon">
          <img src={medium} alt="social" />
        </a>
      </div>

      <Footer phrase="Get to know " link="about me" toAddress="/about" />
      <div className="vector-frame">
        <img src={contactVector} alt="anime" className="about-vector" />
      </div>
    </div>
  );
};
