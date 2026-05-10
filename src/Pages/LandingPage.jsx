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
    <div className="app-shell">
      <div className="app-shell__panel">
        <h1 className="page-heading">Creative Project Portfolio</h1>
        <p className="page-subtitle">
          A polished collection of your projects with quick search, live links,
          and easy management.
        </p>
        <SearchBar query={query} onSearchChange={onSearchChange} />
        <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
        <ProjectForm onAddProject={onAddProject} />
      </div>
    </div>
  );
};

export default LandingPage;
export { LandingPage };
