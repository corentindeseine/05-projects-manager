import FormProjectInput from "./FormProjectInput.jsx";

export default function FormProject({ onNavigation, onSubmitProject }) {
  const handleClick = () => {
    onNavigation('SelectProject');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatas = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      dueDate: e.target.elements.dueDate.value,
    };

    onSubmitProject(formDatas);
  };

  return (
    <div className="w-full flex flex-col items-center mt-40">
      <form onSubmit={handleSubmit} className="w-1/2 my-0 mx-auto">
        <div className="text-right">
          <button
            className="hover:underline hover:opacity-80"
            onClick={handleClick}
          >
            Cancel
          </button>
          <button className="add-btn ml-4" type="submit">
            Save
          </button>
        </div>

        <FormProjectInput type="text" name="title" label="Project title" />
        <FormProjectInput
          type="description"
          name="description"
          label="Description"
        />
        <FormProjectInput type="date" name="dueDate" label="Due date" />
      </form>
    </div>
  );
}
