import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, onDeleteProject }) => {
  return (
    <div>
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
