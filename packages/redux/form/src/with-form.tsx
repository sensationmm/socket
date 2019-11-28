import * as React from 'react';
import { connect } from 'react-redux';

import { IFormState } from './reducers';

export interface IPropsFromReduxState {
  form: IFormState;
}

export const mapStateToProps = (state: { form: IFormState }): IPropsFromReduxState => ({
  form: state.form,
});

const withForm = <IProps extends object>(Component: React.ComponentType<IProps & IPropsFromReduxState>) => {
  const WrappedComponent: React.FC<IProps & IPropsFromReduxState> = (props) => {
    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default (Component: React.ComponentType<any>) => connect(mapStateToProps)(withForm(Component));
