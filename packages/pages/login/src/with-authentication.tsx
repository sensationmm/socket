import { navigate } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';

import { IAuthReducer } from '@somo/pda-pages-login/src';

export interface IPropsFromReduxState {
  userId: string;
  isAuthenticated: boolean;
}

export const mapStateToProps = (state: { user: IAuthReducer }): IPropsFromReduxState => {
  const { user } = state;

  return {
    userId: user.userId,
    isAuthenticated: !!user && !!user.accessToken,
  };
};

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

export default (Component: React.ComponentType<any>) => connect(mapStateToProps)(withRedirect(Component));
