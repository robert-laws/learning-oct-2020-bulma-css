import React from 'react';
import coffee from '../img/coffee-2.png';

export const GridColumns = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-vcentered'>
          <div className='column is-3'>
            <h1 className='is-size-1 title'>Docker</h1>
            <h2 className='is-size-2 subtitle'>Dark Roast</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ullam eum recusandae sequi nemo, quaerat cupiditate cumque nulla.
              Culpa, reprehenderit.
            </p>
          </div>
          <div className='column is-5 has-text-centered'>
            <img src={coffee} alt='Coffee Cup' />
          </div>
          <div className='column is-4'>
            <div className='is-size-4 mb-4'>$10.95</div>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, perspiciatis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
