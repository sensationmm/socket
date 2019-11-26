import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '@somo/pda-apps-www/src/state/reducer';
import { actions } from '@somo/pda-redux-notification/src';

import { INotification } from '@somo/pda-redux-notification/src/types';
import NotificationList from './notification-list.component';

export interface IStateProps {
  notifications: INotification[];
}

export const mapStateToProps = ({ notification }: AppState) => ({
  notifications: notification,
});

export interface IDispatchProps {
  clearNotification: (id: string) => Dispatch;
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearNotification: (id) => dispatch(actions.removeNotification(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationList);
