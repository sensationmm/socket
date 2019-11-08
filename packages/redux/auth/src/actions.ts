import axios from 'axios';

import { Env, getEnv } from '@somo/pda-utils-env/src';
import * as types from './types';

const auth = axios.create({ baseURL: getEnv(Env.ApiBaseUrl) });

export const getTokenSuccess = () => {
  return (dispatch) => {
    dispatch({
      type: types.GET_TOKEN_REQUEST,
    });

    auth
      .request({
        url: `/token`,
        method: 'POST',
        headers: {
          Authorization: getEnv(Env.AuthorisationHeader),
        },
      })
      .then(({ data }) => {
        return dispatch({
          type: types.GET_TOKEN_SUCCESS,
          payload: {
            ...data,
          },
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

export const setUserId = (userId: string) => ({
  type: types.SET_USER_ID,
  payload: userId,
});
