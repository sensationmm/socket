import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { actions as authActions } from '@somo/pda-redux-auth/src';

import LoginPage from './login.component';

export interface IAuthReducer {
  fetchStatus: string;
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  userId: string;
}

export interface IPropsFromReduxState {
  isAuthenticated: boolean;
}

export interface IPropsFromDispatch {
  actions: {
    handleLogin: typeof authActions.getToken;
    validateIdentitySuccess: typeof authActions.validateIdentitySuccess;
    logout: typeof authActions.logout;
  };
}

export const mapStateToProps = (state: { user: IAuthReducer }): IPropsFromReduxState => {
  const { user } = state;

  return {
    isAuthenticated: !!user && !!user.accessToken,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch): IPropsFromDispatch => ({
  actions: {
    ...bindActionCreators(
      {
        handleLogin: authActions.getToken,
        validateIdentitySuccess: authActions.validateIdentitySuccess,
        logout: authActions.logout,
      },
      dispatch,
    ),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
