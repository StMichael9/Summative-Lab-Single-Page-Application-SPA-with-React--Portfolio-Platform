import { useState } from "react";

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [repo, setRepo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new project object using the form values and a unique ID
    const newProject = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      url: url,
      repo: repo,
    };

    onAddProject(newProject);

    setTitle("");
    setDescription("");
    setUrl("");
    setRepo("");
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add a project</h2>
      <div className="project-form-fields">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Live site URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Repo URL"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
      </div>
      <div className="project-form-actions">
      <button type="submit">Add Project</button>
      </div>
    </form>
  );
};

export default ProjectForm;
export { ProjectForm };
