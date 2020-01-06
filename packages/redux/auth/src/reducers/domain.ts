import { get as storageGet, StorageKeys } from '@somo/pda-utils-storage/src';
import { Action, LOGOUT_USER, VALIDATE_IDENTITY_SUCCESS } from '../types';

export const initialState = {
  ...storageGet(StorageKeys.auth),
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case VALIDATE_IDENTITY_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case LOGOUT_USER: {
      return {};
    }
    default:
      return state;
  }
};
