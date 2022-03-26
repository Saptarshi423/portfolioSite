import React from "react";
import "./Projects.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { projectsData } from "./../../assets/projectsData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects"
        details="Here are a few cool things I've done!"
      />

      <div className="projects-card-container">
        {projectsData.map((project) => {
          console.log(project);
          const { imageUrl, projectDescription, projectName, projectUrl } =
            project;
          return (
            <ProjectCard
              key={new Date().getTime().toString()}
              imageUrl={imageUrl}
              projectDescription={projectDescription}
              projectName={projectName}
              projectUrl={projectUrl}
            />
          );
        })}
      </div>

      <Footer phrase="Check out " link="my skills!" toAddress="/skills" />
    </div>
  );
};
