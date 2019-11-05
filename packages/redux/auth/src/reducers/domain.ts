import { get as storageGet, StorageKeys, update as updateStorage } from '@somo/pda-utils-storage/src';
import * as types from '../types';

const initialState = {
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
    default:
      return state;
  }
};
