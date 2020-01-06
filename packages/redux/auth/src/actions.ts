import { IValidateIdentitySuccess, LOGOUT_USER, VALIDATE_IDENTITY_SUCCESS } from './types';

export const validateIdentitySuccess = (payload): IValidateIdentitySuccess => ({
  type: VALIDATE_IDENTITY_SUCCESS,
  payload,
});

export const logout = (ciamCommunityUrl: string) => ({
  type: LOGOUT_USER,
  payload: ciamCommunityUrl,
});
