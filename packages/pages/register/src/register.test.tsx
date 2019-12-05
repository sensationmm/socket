import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Primary as Button } from '@somo/pda-components-button/src';
import formUtils from '@somo/pda-utils-form/src';

import * as Register from './register.component';

describe('@somo/pda-pages-register', () => {
  let component;
  let initFormStateSpy;
  let clearFormStateSpy;
  let onRegisterSpy;

  const store = configureMockStore();

  const form = {
    values: {
      'register.username': '',
      'register.nickname': '',
    },
    errors: {},
    valid: {},
    showErrorMessage: false,
  };

  beforeEach(() => {
    jest.spyOn(formUtils, 'validateForm').mockReturnValue(true);
    initFormStateSpy = jest.spyOn(formUtils, 'initFormState');
    clearFormStateSpy = jest.spyOn(formUtils, 'clearFormState');
    onRegisterSpy = jest.spyOn(Register, 'onRegister');

    component = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <Provider store={store({ form, notification: [] })}>
          <Register.default />
        </Provider>
      </MockedProvider>,
    );
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
    expect(initFormStateSpy).toHaveBeenCalledWith({
      'register.username': '',
      'register.nickname': '',
    });
  });

  it('calls clearForm on unmount', () => {
    component.unmount();

    expect(clearFormStateSpy).toHaveBeenCalledTimes(1);
  });

  it('clicking register button calls onRegister', () => {
    const button = component.find(Button).at(0);

    button.simulate('click');

    expect(onRegisterSpy).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
