import React from 'react';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Img from '../images/hero.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='container-fluid hero'>
      <div className='row'>
        <div className='col-lg-7 mx-auto'>
          <h2 className='hero__intro'>Hello, I'm</h2>
          <h2 className='hero__name'>Mayowa Adeniyi</h2>
          <p className='col-lg-7 pl-0 mt-4 mb-4'>
            I' am primarily a Front Software Engineer. <br /> I build websites &
            web applications using React. <br /> I also have some experience
            with Node.js, Express <br /> and MongoDB.
          </p>

          <div className='social__icons'>
            <a
              href='https://twitter.com/mayorstacks'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitterSquare className='mr-3' />
            </a>
            <a
              href='https://github.com/Ademayowa'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='mr-3' />
            </a>
            <a
              href='https://www.linkedin.com/in/ademayowa-adeniyi/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='mr-3' />
            </a>
          </div>
        </div>

        <div className='col-lg-4 mr-5 d-none d-lg-block'>
          <img src={Img} alt='' className='hero__img img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
