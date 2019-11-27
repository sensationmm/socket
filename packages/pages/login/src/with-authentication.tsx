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

const withRedirect = (Component: React.ComponentType<any>) => {
  const WrappedComponent: React.FC<IPropsFromReduxState> = ({ isAuthenticated, ...rest }) => {
    if (typeof window !== 'undefined' && !isAuthenticated) {
      navigate('/login');

      return null;
    }

    return <Component {...rest} />;
  };

  return WrappedComponent;
};

export default (Component: React.ComponentType<any>) => connect(mapStateToProps)(withRedirect(Component));
