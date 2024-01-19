import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectProject from "./components/projects/SelectProject.jsx";
import FormProject from "./components/projects/FormProject.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("SelectProject");
  const [projects, setProjects] = useState([]);

  const handleProjectNavigation = (value) => {
    setCurrentPage(value);
  };

  const handleSubmitNewProject = (formDatas) => {
    setProjects([...projects, formDatas]);
  };

  return (
    <div className="flex">
      <ProjectSidebar
        onNavigation={handleProjectNavigation}
        projects={projects}
      />
      {currentPage === "SelectProject" && (
        <SelectProject onNavigation={handleProjectNavigation} />
      )}
      {currentPage === "FormProject" && (
        <FormProject
          onNavigation={handleProjectNavigation}
          onSubmitProject={handleSubmitNewProject}
        />
      )}
      {currentPage === "ProjectDetails" && (
        <ProjectDetails onNavigation={handleProjectNavigation} />
      )}
    </div>
  );
}

export default App;
