import React from 'react';
import coffee from '../img/coffee-2.png';
import { Button } from './Button';

export const GridColumns = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline is-vcentered'>
          <div className='column is-6-tablet is-3-desktop'>
            <h1 className='is-size-3-mobile is-size-1-desktop title'>Docker</h1>
            <h2 className='is-size-3-mobile is-size-2-desktop subtitle'>
              Dark Roast
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ullam eum recusandae sequi nemo, quaerat cupiditate cumque nulla.
              Culpa, reprehenderit.
            </p>
          </div>
          <div className='column is-6-tablet is-5-desktop has-text-centered'>
            <img src={coffee} alt='Coffee Cup' />
          </div>
          <div className='column is-12-tablet is-4-desktop'>
            <div className='is-size-4 mb-4'>$10.95</div>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, perspiciatis!
            </p>
            <Button text='Add to Cart' />
          </div>
        </div>
      </div>
    </section>
  );
};
