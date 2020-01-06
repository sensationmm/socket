import configureMockStore from 'redux-mock-store';

import { mapDispatchToProps, mapStateToProps } from './with-authentication';

describe('withAuthentication hoc', () => {
  const state = {
    user: {
      socketAuthentication: 'JWT',
    },
  };

  describe('mapStateToProps', () => {
    it('should return state user props', () => {
      expect(mapStateToProps(state)).toMatchObject({
        isAuthenticated: true,
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('should return state user props', () => {
      const mockStore = configureMockStore();
      const store = mockStore({});

      expect(mapDispatchToProps(store.dispatch)).toHaveProperty('actions.logout');
    });
  });
});
