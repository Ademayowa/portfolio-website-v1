import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './ProjectList.css';

const ProjectList = ({ project: { title, technologies } }) => {
  return (
    <div className='card card-body projectList'>
      <div className='card__content text-white'>
        <h4>{title}</h4>
        <div className='badge__icons mt-3 mb-3'>
          <span>{technologies}</span>
        </div>

        <div className='card__bottom'>
          <a
            href='https://charismedhospital.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className='mr-3' />
          </a>

          <a
            href='https://charismedhospital.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubSquare className='mr-3' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
