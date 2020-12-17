import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './ProjectList.css';

const ProjectList = ({ project: { title, info, technologies, url, repo } }) => {
  return (
    <div className='card card-body projectList mt-4'>
      <div className='card__content text-white mt-4 mb-4'>
        <h4>{title}</h4>
        <p className='mt-3 mb-4'>{info}</p>
        <div className='badge__icons mt-3 mb-4'>
          <span>{technologies}</span>
        </div>

        <div className='card__bottom'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <FiExternalLink className='mr-3' />
          </a>
          {repo && (
            <a href={repo} target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='mr-3' />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
