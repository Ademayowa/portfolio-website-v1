import React from 'react';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div className='container-fluid hero'>
      <div className='row'>
        <div className='col-lg-7 mx-auto'>
          <h2>Hello, I'm</h2>
          <h2>Mayowa Adeniyi</h2>
          <p className='col-lg-7 pl-0 mt-4 mb-4'>
            I' am primarily a Front Software Engineer. I build websites & web
            applications using React and CSS. <br /> I also have some experience
            with Node.js, Express and MongoDB.
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

        {/* <div className='col-lg-5'>
          <img
            src='https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbXB1dGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt=''
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
