import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions as authActions } from '@somo/pda-redux-auth/src';

import UserSwitch from './user-switch.component';

export interface IPropsFromDispatch {
  selectUser: (value: string) => Dispatch;
}

export const mapDispatchToProps = (dispatch): IPropsFromDispatch => ({
  selectUser: (userId: string) => dispatch(authActions.setUserId(userId)),
});

export default connect(null, mapDispatchToProps)(UserSwitch);
