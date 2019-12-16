import { get as storageGet, StorageKeys } from '@somo/pda-utils-storage/src';
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
      return { ...state, ...payload, fetchStatus: 'COMPLETE' };
    }
    case types.GET_TOKEN_FAILURE: {
      return { ...state, fetchStatus: 'ERROR' };
    }
    case types.SET_USER_ID: {
      return { ...state, userId: payload, fetchStatus: 'COMPLETE' };
    }
    case types.UNAUTHENTICATED: {
      return {};
    }
    default:
      return state;
  }
};
