import { AnyAction, Dispatch, Middleware } from 'redux';

import { clearDomainCookies } from '@somo/pda-utils-cookies/src';
import { Env, getEnv } from '@somo/pda-utils-env/src';
import { clear as clearStorage, StorageKeys, update as updateStorage } from '@somo/pda-utils-storage/src';
import * as types from '../types';

const sessionMiddleware: Middleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  const { type, payload } = action;
  const result = next(action);

  switch (type) {
    case types.GET_TOKEN_SUCCESS: {
      updateStorage(StorageKeys.auth, payload);
      break;
    }
    case types.SET_USER_ID: {
      updateStorage(StorageKeys.auth, { userId: payload });
      break;
    }
    case types.UNAUTHENTICATED: {
      clearStorage(StorageKeys.auth);
      clearDomainCookies(getEnv(Env.CommunityUrl));
      break;
    }
  }

  return result;
};

export default sessionMiddleware;
