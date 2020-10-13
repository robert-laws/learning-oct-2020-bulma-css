import { GET_ACTIVE, UPDATE_ACTIVE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ACTIVE:
      return {
        active: state.active,
      };

    case UPDATE_ACTIVE:
      return {
        active: !state.active,
      };

    default:
      return state;
  }
};
