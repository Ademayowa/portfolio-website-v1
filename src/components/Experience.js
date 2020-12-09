import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import data from '../data';
import './Experience.css';

const Experience = () => {
  return (
    <div className='container-fluid experience'>
      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <h2 className='text-center'>Experience</h2>
          <div className='center-line' />
          <div className='jobs'>
            <div className='job__info'>
              {data.map((item) => {
                const { title, company, dates, duties } = item;

                return (
                  <div key={item.id} className='mt-4'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='mb-5'>{dates}</p>

                    <>
                      {duties.map((duty, index) => {
                        return (
                          <div key={index} className='d-flex'>
                            <BsChevronDoubleRight
                              className='mr-4 mt-1'
                              size={20}
                              color='#f97b58'
                            />
                            <p>{duty}</p>
                          </div>
                        );
                      })}
                    </>
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
