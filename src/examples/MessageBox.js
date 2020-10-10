import React from 'react';
import { Button } from './Button';

export const MessageBox = () => {
  return (
    <div className='message is-info'>
      <div className='message-header'>
        <p>Earn Points with the Coffee Club</p>
      </div>
      <div className='message-body'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          eligendi itaque quos? Voluptates, perferendis similique. Voluptatibus
          voluptate quibusdam accusamus eaque perferendis velit a facilis
          aperiam.
        </p>
        <div className='has-text-centered pt-5 pb-2'>
          <Button text='Learn More' />
        </div>
      </div>
    </div>
  );
};
