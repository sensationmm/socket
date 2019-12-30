import { AnyAction, Dispatch, Middleware } from 'redux';

import { clearDomainCookies } from '@somo/pda-utils-cookies/src';
import { clear as clearStorage, StorageKeys, update as updateStorage } from '@somo/pda-utils-storage/src';
import * as types from '../types';

export const sessionMiddleware: Middleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction): AnyAction => {
  const { type, payload } = action;
  const result = next(action);

  switch (type) {
    case types.GET_TOKEN_SUCCESS:
    case types.VALIDATE_IDENTITY_SUCCESS: {
      updateStorage(StorageKeys.auth, payload);
      break;
    }

    case types.SET_USER_ID: {
      updateStorage(StorageKeys.auth, { userId: payload });
      break;
    }

    case types.UNAUTHENTICATED:
    case types.LOGOUT_USER: {
      clearStorage(StorageKeys.auth);
      clearDomainCookies(payload);
      break;
    }
  }

  return result;
};
