import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import { Primary } from '@somo/pda-components-button/src';
import { createReduxStore } from '@somo/pda-utils-test-support/src/redux-store';

import Login from '.';

const handleLogin = jest.fn();

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-login', () => {
  let component;
  let props;

  beforeAll(() => {
    const mockReduxStore = createReduxStore();
    props = {
      imagery: [
        {
          node: { name: 'energy-pie', publicURL: '/static/energy-pie-10556973034b85890076c0dd1324ea97.png' },
        },
      ],
      handleLogin,
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
