import React from "react";

const ProjectCard = ({ project, onDeleteProject }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.url} target="_blank" rel="noreferrer">
          Live Site
        </a>
        <a href={project.repo} target="_blank" rel="noreferrer">
          Repo
        </a>
      </div>
      <button onClick={() => onDeleteProject(project.id)}>Delete</button>
    </div>
  );
};

export default ProjectCard;
