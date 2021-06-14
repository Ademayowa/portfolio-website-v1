import React from 'react';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero mt-5'>
      <div className='row'>
        <div className='col-lg-7'>
          <h2 className='hero__intro'>Hello!</h2>
          <h2 className='hero__name'>My name is Mayowa Adeniyi</h2>
          <p className='col-lg-11 col-md-11 pl-0 mt-4 mb-2 hero__lead'>
            I'm a front-end software engineer based in Nigeria, focused on
            building user interface for websites & web applications. I also have
            some experience with Node.js, Express and MongoDB.
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

        <div className='col-lg-5 d-none d-lg-block'>
          <BackgroundAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
