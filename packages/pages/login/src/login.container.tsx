import { actions as authActions } from '@somo/pda-redux-auth/src';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import LoginPage from './login.component';

export interface IPropsFromDispatch {
  handleLogin: () => Dispatch;
}

export const mapDispatchToProps = (dispatch): IPropsFromDispatch => ({
  handleLogin: () => dispatch(authActions.getTokenSuccess()),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
