import { mapDispatchToProps, mapStateToProps } from './login.container';

jest.mock('@somo/pda-redux-auth/src');

describe('My Profile container', () => {
  describe('mapStateToProps', () => {
    let state;
    beforeAll(() => {
      state = {
        user: {},
      };
    });

    describe('isAuthenticated based on accessToken', () => {
      it('isAuthenticated is false', () => {
        const props = mapStateToProps(state);
        expect(props.isAuthenticated).toBeFalsy();
      });

      it('isAuthenticated is true where user is defined and isLoadingUser is false', () => {
        const props = mapStateToProps({
          ...state,
          user: { accessToken: '1234567890' },
        });
        expect(props.isAuthenticated).toBeTruthy();
      });
    });
  });

  describe('mapDispatchToProps', () => {
    let props;
    let dispatch;

    beforeAll(() => {
      dispatch = jest.fn();
      props = mapDispatchToProps(dispatch);
    });

    it('should return an object containing functions in keys array', () => {
      const keys = ['handleLogin'];

      keys.forEach((key, index) => {
        expect(props[key]).toBeDefined();
        props[key]();
        expect(dispatch).toHaveBeenCalledTimes(index + 1);
      });
    });
  });
});
