import listImage from '../../assets/no-projects.png'

export default function SelectProject({onNavigation}) {
  const handleClick = () => {
    onNavigation('FormProject');
  }

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <img src={listImage} alt="List" className='w-20' />
      <h1 className='font-bold text-2xl text-neutral-700 mt-4'>No project selected</h1>
      <h2 className='mt-2'>Select a project or get started with a new one</h2>
      <button onClick={handleClick} className='add-btn mt-8'> Create new project </button>
    </div>
  );
}
