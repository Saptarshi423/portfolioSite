import React from "react";
import "./Skills.css";

export const SkillCard = ({ skillName, skillUrl }) => {
  console.log(skillName, skillUrl);
  return (
    <div className="skill">
      <img src={skillUrl} alt="skill" className="" />
      <p>{skillName}</p>
    </div>
  );
};
