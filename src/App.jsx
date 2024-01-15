import { useState } from 'react';

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import CreateProject from "./components/CreateProject.jsx";


function App() {
  const [isCreateProject, setIsCreateProject] = useState(false);

  const handleAddProjectChange = (value) => {
    setIsCreateProject(value);
  }

  return (
    <div className='flex'>
      <ProjectSidebar onAddProjectChange={handleAddProjectChange} />
      {!isCreateProject && <NewProject />}
      {isCreateProject && <CreateProject />}
    </div>
  );
}

export default App;
