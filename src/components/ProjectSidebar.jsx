import { useState } from 'react';

export default function ProjectSidebar({onAddProjectChange}) {

  const handleClick = () => {
    onAddProjectChange(true);
  }

  return (
    <div className="h-screen w-40 sm:w-50 md:w-70 lg:w-1/4 xl:w-1/3 bg-slate-900 text-white rounded-tr-xl pl-12 mt-12">
      <h1 className="my-8 text-3xl font-bold pt-12">My Projects</h1>
      <button onClick={handleClick} className='add-btn'> + ADD PROJECT </button>
      <ul>
        "List"
      </ul>
    </div>
  )
}
