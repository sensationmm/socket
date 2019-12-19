import axios from 'axios';

import { Env, getEnv } from '@somo/pda-utils-env/src';
import {
  GET_TOKEN_FAILURE,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  IGetTokenFailure,
  IGetTokenRequest,
  IGetTokenSuccess,
  IValidateIdentitySuccess,
  LOGOUT_USER,
  SET_USER_ID,
  VALIDATE_IDENTITY_SUCCESS,
} from './types';

const auth = axios.create({ baseURL: getEnv(Env.ApiBaseUrl) });

export const getToken = () => (dispatch) => {
  dispatch(getTokenRequest());
  auth
    .request({
      url: `/token`,
      method: 'POST',
      headers: {
        Authorization: getEnv(Env.AuthorisationHeader),
      },
    })
    .then(({ data }) => dispatch(getTokenSuccess(data)))
    .catch((error) => dispatch(getTokenFailure(error)));
};

export const getTokenRequest = (): IGetTokenRequest => ({
  type: GET_TOKEN_REQUEST,
});

export const getTokenSuccess = (payload): IGetTokenSuccess => ({
  type: GET_TOKEN_SUCCESS,
  payload,
});

export const validateIdentitySuccess = (payload): IValidateIdentitySuccess => ({
  type: VALIDATE_IDENTITY_SUCCESS,
  payload,
});

export const getTokenFailure = (error): IGetTokenFailure => ({
  type: GET_TOKEN_FAILURE,
  payload: error,
});

export const setUserId = (userId: string) => ({
  type: SET_USER_ID,
  payload: userId,
});

export const logout = () => ({
  type: LOGOUT_USER,
});
