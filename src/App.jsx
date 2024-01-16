import { useState } from 'react';

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import AddProject from "./components/AddProject.jsx";
import CreateProject from "./components/CreateProject.jsx";


function App() {
  const [isCreateProject, setIsCreateProject] = useState(false);

  const handleAddProjectChange = (value) => {
    setIsCreateProject(value);
  }

  const handleSubmitNewProject = (formDatas) => {
    console.log("form datas :", formDatas)
  }

  return (
    <div className='flex'>
      <ProjectSidebar onAddProjectChange={handleAddProjectChange} />
      {!isCreateProject && <AddProject onAddProjectChange={handleAddProjectChange} />}
      {isCreateProject && <CreateProject onAddProjectChange={handleAddProjectChange} onSubmitProject={handleSubmitNewProject} />}
    </div>
  );
}

export default App;
