export default function ProjectSidebar({ onNavigation, projects }) {
  const handleClickAddProject = () => {
    onNavigation('FormProject');
  };

  const handleClickProjectDetails = () => {
    onNavigation('ProjectDetails')
  };

  return (
    <div className="h-screen w-1/4 bg-slate-900 text-white rounded-tr-xl pl-6 mt-12 pr-4">
      <h1 className="my-6 text-3xl font-bold pt-12">My Projects</h1>
      <ul>
        {projects.map((project) => (
          <button
            className="w-full text-left rounded-md mb-2 px-3 py-1 overflow-hidden hover:bg-slate-700"
            key={project.title}
            onClick={handleClickProjectDetails}
          >
            {project.title}
          </button>
        ))}
      </ul>

      <button
        onClick={handleClickAddProject}
        className="add-btn w-full mt-2"
      >
        Add new project
      </button>
    </div>
  );
}
