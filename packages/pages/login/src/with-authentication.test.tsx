import configureMockStore from 'redux-mock-store';

import { mapDispatchToProps, mapStateToProps } from './with-authentication';

describe('withAuthentication hoc', () => {
  const state = {
    user: {
      fetchStatus: 'complete',
      expiresIn: 1,
      userId: '123',
      accessToken: 't123',
      tokenType: 'Bearer',
    },
  };

  describe('mapStateToProps', () => {
    it('should return state user props', () => {
      expect(mapStateToProps(state)).toMatchObject({
        userId: state.user.userId,
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
