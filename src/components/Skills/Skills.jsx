import React from "react";
import "./Skills.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import skillsVector from "./../../assets/skills_vector.png";
import { skillList } from "./../../assets/skillsData";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Skills"
        details="Passionate about new Technologies, I keep exploring stuff. Here is the the Tech Stack I've worked with!"
      />

      <div className="skill-card-container">
        {skillList.map((data) => {
          const { id, skillName, skillUrl } = data;
          //console.log(skillName, skillUrl);
          return (
            <>
              <SkillCard key={id} skillName={skillName} skillUrl={skillUrl} />
            </>
          );
        })}
      </div>

      <Footer phrase="Get in " link="touch." toAddress="./contact" />
      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills" className="skills-vector" />
      </div>
    </div>
  );
};
