import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import { Primary } from '@somo/pda-components-button/src';
import { createReduxStore } from '@somo/pda-utils-test-support/src/redux-store';

import Login from '.';
import { ILoginPageProps } from './login.component';

const validateIdentitySuccess = jest.fn();
const logout = jest.fn();

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-login', () => {
  let component;
  let props: ILoginPageProps;

  beforeAll(() => {
    const mockReduxStore = createReduxStore();
    props = {
      actions: {
        validateIdentitySuccess,
        logout,
      },
      isAuthenticated: false,
    };

    component = shallow(
      <Provider store={mockReduxStore}>
        <Login {...props} />
      </Provider>,
    );
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });

  it('should render a Primary button component successfully', () => {
    expect(component.find(<Primary />)).toBeDefined();
  });

  it('should have a isAuthenticated prop', () => {
    expect(component.props().isAuthenticated).toBeFalsy();
  });
});
