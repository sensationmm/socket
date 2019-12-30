import axios from 'axios';

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

const auth = axios.create({ baseURL: 'https://api-uk.integration.gentrack.cloud/v1' });

export const getToken = () => (dispatch) => {
  dispatch(getTokenRequest());
  auth
    .request({
      url: `/token`,
      method: 'POST',
      headers: {
        Authorization:
          'Basic NzhkNGQ2MmMtNjJkYS00YTI0LTkwYjAtMjM1MjkwYzVlMzZjOkowZjMrc3Z4TFd6clRxSlUyQ3pXYjJCV3pac0FDSFF3OFVNK2hlOU54TU09',
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

export const logout = (ciamCommunityUrl: string) => ({
  type: LOGOUT_USER,
  payload: ciamCommunityUrl,
});
