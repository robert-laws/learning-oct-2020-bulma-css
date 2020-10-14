import React, { useContext } from 'react';
import ActiveContext from '../context/active/activeContext';

export const Modal = () => {
  const activeContext = useContext(ActiveContext);
  const { active, updateActive } = activeContext;

  return (
    <div className={`modal ${active ? 'is-active' : ''}`}>
      <div className='modal-background' onClick={() => updateActive()}></div>
      <div className='modal-content has-background-white py-5 px-5'>
        <h3 className='title mb-6'>Join the Club</h3>
        <form>
          <div className='field'>
            <label className='label'>Full Name</label>
            <div className='control'>
              <input
                type='text'
                name='fullName'
                id='fullName'
                placeholder='Full Name'
                className='input'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Email'
                className='input'
              />
            </div>

            <div className='field mt-1'>
              <div className='control'>
                <label className='checkbox'>
                  <input type='checkbox' name='terms' id='terms' />{' '}
                  <a>I agree to the terms & conditions</a>
                </label>
              </div>
            </div>
            <div className='mt-5 has-text-centered'>
              <button className='button is-info'>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
