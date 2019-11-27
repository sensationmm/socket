import { mapStateToProps } from './with-authentication';

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
});
