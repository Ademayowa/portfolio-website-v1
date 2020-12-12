import React from 'react';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero mt-5'>
      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <h2 className='hero__intro'>Hello!</h2>
          <h2 className='hero__name'>My name is Mayowa Adeniyi</h2>
          <p className='col-lg-8 pl-0 mt-4 mb-4 hero__whatIDo'>
            I'm primarily a front-end software engineer focused on building user
            interface for websites & web applications. I also have some
            experience with Node.js, Express and MongoDB.
          </p>

          <div className='social__icons mb-4'>
            <a
              href='https://twitter.com/mayorstacks'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitterSquare className='mr-2' />
            </a>
            <a
              href='https://github.com/Ademayowa'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='mr-2' />
            </a>
            <a
              href='https://www.linkedin.com/in/ademayowa-adeniyi/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='mr-2' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
