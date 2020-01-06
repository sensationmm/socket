import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { actions as authActions } from '@somo/pda-redux-auth/src';

import LoginPage from './login.component';

export interface IAuthReducer {
  socketAuthentication: string;
}

export interface IPropsFromReduxState {
  isAuthenticated: boolean;
}

export interface IPropsFromDispatch {
  actions: {
    validateIdentitySuccess: typeof authActions.validateIdentitySuccess;
    logout: typeof authActions.logout;
  };
}

export const mapStateToProps = (state: { user: IAuthReducer }): IPropsFromReduxState => {
  const { user } = state;

  return {
    isAuthenticated: !!user && !!user.socketAuthentication,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch): IPropsFromDispatch => ({
  actions: {
    ...bindActionCreators(
      {
        validateIdentitySuccess: authActions.validateIdentitySuccess,
        logout: authActions.logout,
      },
      dispatch,
    ),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
