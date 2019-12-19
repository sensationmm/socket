import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions, types } from '.';

const {
  getToken,
  getTokenFailure,
  getTokenRequest,
  getTokenSuccess,
  logout,
  setUserId,
  validateIdentitySuccess,
} = actions;

const {
  GET_TOKEN_FAILURE,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  LOGOUT_USER,
  SET_USER_ID,
  VALIDATE_IDENTITY_SUCCESS,
} = types;

const mockStore = configureMockStore([thunk]);

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    request: jest.fn(() => Promise.resolve('token')),
  })),
}));

describe('Auth actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('getToken', () => {
    store.dispatch(getToken());
    expect(store.getActions()).toEqual([{ type: GET_TOKEN_REQUEST }]);
  });

  test('getTokenFailure', () => {
    store.dispatch(getTokenFailure('error'));
    expect(store.getActions()).toEqual([{ type: GET_TOKEN_FAILURE, payload: 'error' }]);
  });

  test('getTokenRequest', () => {
    store.dispatch(getTokenRequest());
    expect(store.getActions()).toEqual([{ type: GET_TOKEN_REQUEST }]);
  });

  test('getTokenSuccess', () => {
    store.dispatch(getTokenSuccess('token'));
    expect(store.getActions()).toEqual([{ type: GET_TOKEN_SUCCESS, payload: 'token' }]);
  });

  test('logout', () => {
    store.dispatch(logout());
    expect(store.getActions()).toEqual([{ type: LOGOUT_USER }]);
  });

  test('setUserId', () => {
    store.dispatch(setUserId('uid'));
    expect(store.getActions()).toEqual([{ type: SET_USER_ID, payload: 'uid' }]);
  });

  test('validateIdentitySuccess', () => {
    const payload = {
      username: 'username',
      hash: 'usernameHash',
      token: 'token',
    };
    store.dispatch(validateIdentitySuccess(payload));
    expect(store.getActions()).toEqual([{ type: VALIDATE_IDENTITY_SUCCESS, payload }]);
  });
});
