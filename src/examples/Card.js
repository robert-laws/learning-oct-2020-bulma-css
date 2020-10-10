import React from 'react';
import coffee from '../img/coffee.png';

export const Card = () => {
  return (
    <div className='card'>
      <div className='card-image has-text-centered px-6'>
        <img src={coffee} alt='Coffee Mug' />
      </div>
      <div className='card-content'>
        <p>$20.50</p>
        <div className='title is-size-5'>Big Mug</div>
        <footer className='card-footer'>
          <p className='card-footer-item'>
            <a href='#' className='has-text-grey'>
              View
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};
