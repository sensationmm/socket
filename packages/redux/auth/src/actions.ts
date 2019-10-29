import axios from 'axios';

import * as types from './types';

const auth = axios.create({ baseURL: 'https://api-uk.integration.gentrack.cloud/v1' });

export const getTokenSuccess = () => {
  return (dispatch) => {
    dispatch({
      type: types.GET_TOKEN_REQUEST,
    });

    auth
      .request({
        url: `/token`,
        method: 'POST',
        data: {
          username: '78d4d62c-62da-4a24-90b0-235290c5e36c',
          password: 'J0f3+svxLWzrTqJU2CzWb2BWzZsACHQw8UM+he9NxMM=',
        },
      })
      .then((response) => {
        return dispatch({
          type: types.GET_TOKEN_SUCCESS,
          payload: response,
        });
      })
      .catch((error) =>
        dispatch({
          type: types.GET_TOKEN_FAILURE,
          payload: error,
        }),
      );
  };
};
