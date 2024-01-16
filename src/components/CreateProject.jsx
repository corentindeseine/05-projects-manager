export default function CreateProject({onAddProjectChange, onSubmitProject}) {

  const handleClick = () => {
    onAddProjectChange(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      dueDate: e.target.elements.dueDate.value,
    };

    onSubmitProject(formData);

  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <button onClick={handleClick} className='add-btn mt-8'> Cancel </button>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            required
          />
        </div>

        <div>
          <label htmlFor="dueDate">Date d'échéance :</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
