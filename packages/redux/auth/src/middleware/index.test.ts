import { clearDomainCookies } from '@somo/pda-utils-cookies/src';
import { clear as clearStorage, update as updateStorage } from '@somo/pda-utils-storage/src';
import configureMockStore from 'redux-mock-store';
import sessionMiddleware from '.';

jest.mock('@somo/pda-utils-storage/src', () => ({
  clear: jest.fn(),
  update: jest.fn(),
  StorageKeys: {
    auth: 'authentication',
  },
}));

jest.mock('@somo/pda-utils-cookies/src', () => ({
  clearDomainCookies: jest.fn(),
}));

describe('Session middleware', () => {
  const middleware = [sessionMiddleware];
  const mockStore = configureMockStore(middleware);

  it('should update storage authentication key if action type is GET_TOKEN_SUCCESS', () => {
    const store = mockStore({});
    store.dispatch({ type: '@SOCKET/GET_TOKEN_SUCCESS', payload: 't123' });
    expect(updateStorage).toHaveBeenCalledWith('authentication', 't123');
  });

  it('should update storage user id key if action type is SET_USER_ID', () => {
    const store = mockStore({});
    store.dispatch({ type: '@SOCKET/SET_USER_ID', payload: 'u12' });
    expect(updateStorage).toHaveBeenCalledWith('authentication', 't123');
  });

  it('should clear storage authentication key and community subdomain cookies if action type is UNAUTHENTICATED', () => {
    const store = mockStore({});
    store.dispatch({ type: '@SOCKET/UNAUTHENTICATED' });
    expect(clearStorage).toHaveBeenCalledWith('authentication');
    expect(clearDomainCookies).toHaveBeenCalled();
  });
});
