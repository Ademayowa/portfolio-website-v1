import React, { useEffect, useState } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import data from '../data';
import Loading from './Loading';
import './Experience.css';

const Experience = () => {
  return (
    <div className='container-fluid experience'>
      <div className='row'>
        <div className='col-lg-7 mx-auto'>
          <h2 className='text-center'>Experience</h2>
          <div className='center-line' />
          <div className='jobs'>
            {data.map((item, index) => {
              return <div>{item.title}</div>;
            })}
            {/* btn container */}
            <div className='btn__container text-center mb-4'></div>
            {/* job info */}
            <div className='job__info'>
              {data.map((item, index) => {
                return (
                  <div className='d-flex'>
                    <ul>
                      <li>{item.duties}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
