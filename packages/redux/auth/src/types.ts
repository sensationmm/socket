export const GET_TOKEN_REQUEST = '@SOCKET/GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = '@SOCKET/GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILURE = '@SOCKET/GET_TOKEN_FAILURE';
export const UNAUTHENTICATED = '@SOCKET/UNAUTHENTICATED';
export const VALIDATE_IDENTITY_SUCCESS = '@SOCKET/VALIDATE_IDENTITY_SUCCESS';
export const LOGOUT_USER = '@SOCKET/LOGOUT_USER';
export const SET_USER_ID = '@SOCKET/SET_USER_ID';

export type Action =
  | IGetTokenSuccess
  | IGetTokenRequest
  | IGetTokenFailure
  | ISetUserId
  | ILogout
  | IValidateIdentitySuccess;

export interface IGetTokenSuccess {
  type: typeof GET_TOKEN_SUCCESS;
  payload: {
    accessToken: string;
    expiresIn: number;
    tokenType: string;
  };
}

export interface IGetTokenRequest {
  type: typeof GET_TOKEN_REQUEST;
}

export interface IGetTokenFailure {
  type: typeof GET_TOKEN_FAILURE;
  payload: any;
}

export interface ISetUserId {
  type: typeof SET_USER_ID;
  payload: any;
}

export interface IValidateIdentitySuccess {
  type: typeof VALIDATE_IDENTITY_SUCCESS;
  payload: {
    token: string;
    juniferCustomerIds: number;
    username: string;
  };
}

export interface ILogout {
  type: typeof LOGOUT_USER;
}
