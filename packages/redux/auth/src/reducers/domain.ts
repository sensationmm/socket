import * as types from '../types';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TOKEN_REQUEST: {
      return { ...state, fetchStatus: 'PENDING' };
    }
    case types.GET_TOKEN_SUCCESS: {
      const user = payload;

      return { ...state, user };
    }
    case types.GET_TOKEN_FAILURE: {
      return { ...state, fetchStatus: 'ERROR' };
    }
    default:
      return state;
  }
};
