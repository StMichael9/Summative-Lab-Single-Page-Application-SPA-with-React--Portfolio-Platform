import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, onDeleteProject }) => {
  if (!projects.length) {
    return <div className="empty-state">No projects found.</div>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDeleteProject={onDeleteProject}
        />
      ))}
    </div>
  );
};

export default ProjectList;
export { ProjectList };
