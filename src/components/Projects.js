import React from 'react';
import projects from '../projects';
import ProjectList from './ProjectList';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='text-white'>
        <h2 className='text-center'>My Projects</h2>
        <div className='center-line mb-5' />
      </div>

      <div style={grid}>
        {projects.map((project) => (
          <ProjectList key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const grid = {
  display: 'Grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '2rem',
};

export default Projects;
