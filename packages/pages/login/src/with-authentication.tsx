import { navigate } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IAuthReducer } from '@somo/pda-pages-login/src';
import { actions } from '@somo/pda-redux-auth/src';

export interface IPropsFromReduxState {
  isAuthenticated: boolean;
}

export const mapStateToProps = (state: { user: IAuthReducer }): IPropsFromReduxState => {
  const { user } = state;

  return {
    isAuthenticated: !!user && !!user.socketAuthentication,
  };
};

export interface IPropsFromReduxActions {
  actions: {
    logout: typeof actions.logout;
  };
}

export const mapDispatchToProps = (dispatch: Dispatch): IPropsFromReduxActions => ({
  actions: {
    ...bindActionCreators(
      {
        logout: actions.logout,
      },
      dispatch,
    ),
  },
});

const withRedirect = <IProps extends object>(Component: React.ComponentType<IProps & IPropsFromReduxState>) => {
  const WrappedComponent: React.FC<IProps & IPropsFromReduxState> = (props) => {
    if (typeof window !== 'undefined' && !props.isAuthenticated) {
      navigate('/login');

      return null;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export const withSession = (Component: React.ComponentType<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component);

export default (Component: React.ComponentType<any>) => connect(mapStateToProps)(withRedirect(Component));
