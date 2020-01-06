export const UNAUTHENTICATED = '@SOCKET/UNAUTHENTICATED';
export const VALIDATE_IDENTITY_SUCCESS = '@SOCKET/VALIDATE_IDENTITY_SUCCESS';
export const LOGOUT_USER = '@SOCKET/LOGOUT_USER';

export type Action = ILogout | IValidateIdentitySuccess;

export interface IValidateIdentitySuccess {
  type: typeof VALIDATE_IDENTITY_SUCCESS;
  payload: {
    token: string;
  };
}

export interface ILogout {
  type: typeof LOGOUT_USER;
}
