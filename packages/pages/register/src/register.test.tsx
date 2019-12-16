import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { GraphQLError } from 'graphql';
import { createMockClient } from 'mock-apollo-client';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Primary as Button } from '@somo/pda-components-button/src';
import formUtils from '@somo/pda-utils-form/src';

import * as Register from './register.component';

window.scrollTo = () => null;

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-register', () => {
  let component;
  let initFormStateSpy;
  let clearFormStateSpy;
  let setFormErrorSpy;
  let setFieldErrorSpy;
  let onRegisterSpy;
  const jestMock = jest.fn().mockImplementation((id) => id);

  const form = {
    values: {
      'register.username': '',
      'register.nickname': '',
    },
    errors: {},
    valid: {},
    showErrorMessage: false,
  };

  const mockStore = configureMockStore()({ form, notification: [] });

  beforeEach(() => {
    jest.spyOn(formUtils, 'validateForm').mockReturnValue(true);
    initFormStateSpy = jest.spyOn(formUtils, 'initFormState');
    clearFormStateSpy = jest.spyOn(formUtils, 'clearFormState');
    setFormErrorSpy = jest.spyOn(formUtils, 'setFormError');
    setFieldErrorSpy = jest.spyOn(formUtils, 'setFieldError');
    onRegisterSpy = jest.spyOn(Register, 'onRegister');

    component = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <Provider store={mockStore}>
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
    expect(setFormErrorSpy).toHaveBeenCalledTimes(0);
  });

  it('onRegister sets error when duplicate email', async () => {
    const mockClient = createMockClient();
    const queryHandler = jest.fn().mockResolvedValue({
      data: {
        checkRegistration: {
          usernameExists: true,
          nicknameValid: {
            status: 'nok',
            message: 'error message',
          },
          newSogUserValid: null,
        },
      },
    });
    mockClient.setRequestHandler(Register.CHECK_REGISTRATION_QUERY, queryHandler);

    await Register.onRegister(
      [],
      mockClient,
      {
        ['register.username']: 'false@test.com',
        ['register.nickname']: 'asd',
      },
      jestMock,
    );

    expect(setFieldErrorSpy).toHaveBeenCalledTimes(1);
    expect(setFieldErrorSpy).toHaveBeenCalledWith('register.username', 'site.register.errors.usernameExists', false);
  });

  it('onRegister sets error when invalid nickname', async () => {
    const mockClient = createMockClient();
    const queryHandler = jest.fn().mockResolvedValue({
      data: {
        checkRegistration: {
          usernameExists: false,
          nicknameValid: {
            status: 'nok',
            message: 'error message',
          },
          newSogUserValid: null,
        },
      },
    });
    mockClient.setRequestHandler(Register.CHECK_REGISTRATION_QUERY, queryHandler);

    await Register.onRegister(
      [],
      mockClient,
      {
        ['register.username']: 'true@test.com',
        ['register.nickname']: 'asd',
      },
      jestMock,
    );

    expect(setFieldErrorSpy).toHaveBeenCalledTimes(1);
    expect(setFieldErrorSpy).toHaveBeenCalledWith('register.nickname', 'error message');
  });

  it('onRegister sets error when api fails', async () => {
    const mockClient = createMockClient();
    const queryHandler = jest.fn().mockRejectedValue(new Error('GraphQL Network Error'));
    mockClient.setRequestHandler(Register.CHECK_REGISTRATION_QUERY, queryHandler);

    await Register.onRegister(
      [],
      mockClient,
      {
        ['register.username']: 'false@test.com',
        ['register.nickname']: 'asd',
      },
      jestMock,
    );

    expect(queryHandler).toHaveBeenCalledTimes(1);
    expect(setFormErrorSpy).toHaveBeenCalledTimes(1);
    expect(setFormErrorSpy).toHaveBeenCalledWith('errors.httpGenericContent');
  });

  it('onRegister shows error on form validation fail', async () => {
    jest.spyOn(formUtils, 'validateForm').mockReturnValueOnce(false);

    const mockClient = createMockClient();
    const queryHandler = jest.fn().mockResolvedValue({
      data: {
        checkRegistration: {
          usernameExists: null,
          nicknameValid: null,
        },
        errors: [new GraphQLError('Loading error')],
      },
    });
    mockClient.setRequestHandler(Register.CHECK_REGISTRATION_QUERY, queryHandler);

    await Register.onRegister(
      [],
      mockClient,
      {
        ['register.username']: 'true@test.com',
        ['register.nickname']: 'asd',
      },
      jestMock,
    );

    expect(queryHandler).toHaveBeenCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
