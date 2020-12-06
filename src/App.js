import React from 'react';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Experience from './components/Experience';
import './index.css';

const App = () => {
  return (
    <div className='app'>
      <Hero />
      <Experience />
    </div>
  );
};

export default App;
