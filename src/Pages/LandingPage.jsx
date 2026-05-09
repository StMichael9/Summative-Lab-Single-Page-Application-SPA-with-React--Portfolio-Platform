import React from "react";
import SearchBar from "../Components/SearchBar";
import ProjectList from "../Components/ProjectList";
import ProjectForm from "../Components/ProjectForm";

const LandingPage = ({
  projects,
  query,
  onSearchChange,
  onAddProject,
  onDeleteProject,
}) => {
  return (
    <div>
      <SearchBar query={query} onSearchChange={onSearchChange} />
      <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
      <ProjectForm onAddProject={onAddProject} />
    </div>
  );
};

export default LandingPage;
export { LandingPage };
