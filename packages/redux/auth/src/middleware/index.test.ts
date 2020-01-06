import configureMockStore from 'redux-mock-store';

import { clearDomainCookies } from '@somo/pda-utils-cookies/src';
import { clear as clearStorage } from '@somo/pda-utils-storage/src';
import { sessionMiddleware } from '.';

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

  it('should clear storage authentication key and community subdomain cookies if action type is UNAUTHENTICATED', () => {
    const store = mockStore({});
    store.dispatch({ type: '@SOCKET/UNAUTHENTICATED' });
    expect(clearStorage).toHaveBeenCalledWith('authentication');
    expect(clearDomainCookies).toHaveBeenCalled();
  });
});
