import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions, types } from '.';

const { logout, validateIdentitySuccess } = actions;

const { LOGOUT_USER, VALIDATE_IDENTITY_SUCCESS } = types;

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

  test('logout', () => {
    store.dispatch(logout('https://www.example.com'));
    expect(store.getActions()).toEqual([{ type: LOGOUT_USER, payload: 'https://www.example.com' }]);
  });

  test('validateIdentitySuccess', () => {
    const payload = {
      socketAuthentication: 'socketAuthentication',
    };
    store.dispatch(validateIdentitySuccess(payload));
    expect(store.getActions()).toEqual([{ type: VALIDATE_IDENTITY_SUCCESS, payload }]);
  });
});
