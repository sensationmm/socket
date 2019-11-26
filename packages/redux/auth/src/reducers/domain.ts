import {
  clear as clearStorage,
  get as storageGet,
  StorageKeys,
  update as updateStorage,
} from '@somo/pda-utils-storage/src';
import * as types from '../types';

export const initialState = {
  ...storageGet(StorageKeys.auth),
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TOKEN_REQUEST: {
      return { ...state, fetchStatus: 'PENDING' };
    }
    case types.GET_TOKEN_SUCCESS: {
      updateStorage(StorageKeys.auth, payload);

      return { ...state, ...payload, fetchStatus: 'COMPLETE' };
    }
    case types.GET_TOKEN_FAILURE: {
      return { ...state, fetchStatus: 'ERROR' };
    }
    case types.SET_USER_ID: {
      const user = {
        userId: payload,
      };
      updateStorage(StorageKeys.auth, user);

      return { ...state, ...user, fetchStatus: 'COMPLETE' };
    }
    case types.UNAUTHENTICATED: {
      clearStorage(StorageKeys.auth);

      return {};
    }
    default:
      return state;
  }
};
