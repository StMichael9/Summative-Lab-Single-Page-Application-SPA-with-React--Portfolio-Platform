import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "TensorFinance-Advisor",
      description: "AI helps you manage money and plan for the future.",
      url: "https://tensor-finance-advisor.vercel.app",
      repo: "https://github.com/StMichael9/TensorFinance-Advisor",
    },
    {
      id: 2,
      title: "Wordly Dictionary",
      description: "Backend-only REST API.",
      url: "https://summative-lab-single-page-applicati.vercel.app/",
      repo: "https://github.com/StMichael9/Summative-Lab-Single-Page-Application-SPA---Wordly",
    },
  ]);

  function handleAddProject(newProject) {
    setProjects((prev) => [...prev, newProject]);
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  }

  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <LandingPage
      projects={filteredProjects}
      query={query}
      onSearchChange={handleSearchChange}
      onAddProject={handleAddProject}
      onDeleteProject={handleDeleteProject}
    />
  );
}

export default App;
