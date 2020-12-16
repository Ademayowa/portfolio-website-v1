import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/layout/Footer';
import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <Hero />
      <Experience />
      <Projects />
      <Footer />
      <img src={Img1} alt='' className='img-fluid shape' />
      <img src={Img2} alt='' className='img-fluid shape' />
    </div>
  );
};

export default App;
