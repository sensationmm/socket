import { get as storageGet, StorageKeys } from '@somo/pda-utils-storage/src';
import {
  Action,
  GET_TOKEN_FAILURE,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  LOGOUT_USER,
  SET_USER_ID,
  VALIDATE_IDENTITY_SUCCESS,
} from '../types';

export const initialState = {
  ...storageGet(StorageKeys.auth),
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST: {
      return { ...state, fetchStatus: 'PENDING' };
    }
    case GET_TOKEN_SUCCESS:
    case VALIDATE_IDENTITY_SUCCESS: {
      return { ...state, ...action.payload, fetchStatus: 'COMPLETE' };
    }
    case GET_TOKEN_FAILURE: {
      return { ...state, fetchStatus: 'ERROR' };
    }
    case SET_USER_ID: {
      return { ...state, userId: action.payload, fetchStatus: 'COMPLETE' };
    }
    case LOGOUT_USER: {
      return {};
    }
    default:
      return state;
  }
};
