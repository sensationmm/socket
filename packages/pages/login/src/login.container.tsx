import { actions as authActions } from '@somo/pda-redux-auth/src';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import LoginPage from './login.component';

export interface IAuthReducer {
  fetchStatus: string;
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface IPropsFromReduxState {
  isAuthenticated: boolean;
}

export interface IPropsFromDispatch {
  handleLogin: () => Dispatch;
}

export const mapStateToProps = (state: { user: IAuthReducer }): IPropsFromReduxState => {
  const { user } = state;

  return {
    isAuthenticated: !!user && !!user.accessToken,
  };
};

export const mapDispatchToProps = (dispatch): IPropsFromDispatch => ({
  handleLogin: () => dispatch(authActions.getTokenSuccess()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);