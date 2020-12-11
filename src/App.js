import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/layout/Footer';
import './index.css';

const App = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
