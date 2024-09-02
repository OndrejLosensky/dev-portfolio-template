import React from 'react';
import { projectsData } from '../lib/data';

const Projects: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{projectsData.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="border p-4 rounded">
            <img src={project.imageUrl} alt={project.title} className="mb-2 rounded" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
