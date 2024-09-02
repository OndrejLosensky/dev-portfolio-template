import React from 'react';
import { projectsData } from '../lib/data';
import { useSectionInView } from '../hooks/useSectionInView';

import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  useSectionInView("projects")

  return (
    <div id='projects' className="w-full my-32">
      <h2 className="text-3xl font-bold">{projectsData.title}</h2>
      <div className="flex flex-col gap-4 mb-6 mt-4">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="flex flex-row items-center border p-4 gap-x-8 rounded">
            <img src={project.imageUrl} alt={project.title} className="" />
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex flex-col justify-between'>
                <h3 className="text-xl font-bold pb-4">{project.title}</h3>
                <p className='font-light text-white/70 pb-6'>{project.description}</p>
                <ul className='flex flex-row items-center gap-x-4 text-blue-400'>
                  <li>TypeScript</li>
                  –
                  <li>React</li>
                  –
                  <li>TailwindCSS</li>
                  –
                  <li>Redux</li>                
                </ul>             
              </div>

              <div>
                <button>
                  <HiArrowTopRightOnSquare className='w-6 h-6'/>
                </button>
              </div>
            </div>            
          </div>
        ))}
      </div>
      <div className='w-full flex items-center justify-center'>
        <Link to="/projects" className='px-8 py-4 mx-auto rounded-md bg-black active:scale-90 duration-200 text-white'> More projects  </Link>
      </div>
    </div>
  );
};

export default Projects;
