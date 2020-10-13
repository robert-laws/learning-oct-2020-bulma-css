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
      </div>
    </div>
  );
};
