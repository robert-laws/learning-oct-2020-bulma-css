import React, { useReducer } from 'react';
import ActiveContext from './activeContext';
import activeReducer from './activeReducer';
import { GET_ACTIVE, UPDATE_ACTIVE } from '../types';

const ActiveState = ({ children }) => {
  const initialState = {
    active: false,
  };

  const [state, dispatch] = useReducer(activeReducer, initialState);

  const getActive = () => {
    dispatch({ type: GET_ACTIVE });
  };

  const updateActive = () => {
    dispatch({ type: UPDATE_ACTIVE });
  };

  return (
    <ActiveContext.Provider
      value={{
        active: state.active,
        getActive,
        updateActive,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveState;
