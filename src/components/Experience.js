import React, { useEffect, useState } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Loading from './Loading';
import './Experience.css';

const url =
  'https://cors-anywhere.herokuapp.com/https://websiteportfolio-v1.herokuapp.com/api/v1/jobs/all';

const Experience = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <Loading />;
  const { company, duties, title, dates } = jobs[value];

  return (
    <div className='container-fluid experience'>
      <div className='row'>
        <div className='col-lg-7 mx-auto'>
          <h2 className='text-center'>Experience</h2>
          <div className='center-line' />
          <div className='jobs'>
            <div className='btn__container text-center mb-4'>
              {jobs.map((item, index) => {
                return (
                  <button
                    onClick={() => setValue(index)}
                    key={index}
                    className={`btn btn-link mb-2 ${
                      index === value && 'btn__active'
                    }`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>

            <div className='job__info'>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className='mb-5'>{dates}</p>

              {duties.map((duty, index) => {
                return (
                  <div key={index} className='experience__duties'>
                    <BsChevronDoubleRight size={20} />
                    <p>{duty}</p>
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
