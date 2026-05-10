import { useState } from "react";

const ProjectCard = ({ project, onDeleteProject }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url}>Live Site</a>
      <a href={project.repo}>Repo</a>

      <button onClick={() => onDeleteProject(project.id)}>Delete</button>
    </div>
  );
};

export default ProjectCard;
