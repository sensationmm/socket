import { reducers, types } from '.';
import { RESET_VALIDATION } from './types';

const { form, initialState } = reducers;
const { CLEAR_FORM, CLEAR_FORM_ERRORS, INIT_FORM, SET_ERRORS, SET_FORM_ERRORS, SET_VALID, UPDATE_FORM } = types;

describe('form reducer', () => {
  test('INIT_FORM', () => {
    const action = {
      type: INIT_FORM as typeof INIT_FORM,
      payload: {
        values: {
          test: 'test1',
        },
        errors: {},
        valid: {},
        showErrorMessage: false,
      },
    };
    const expectedState = {
      values: {
        test: 'test1',
      },
      errors: {},
      valid: {},
      showErrorMessage: false,
    };

    expect(form(initialState, action)).toEqual(expectedState);
  });

  test('UPDATE_FORM without arrayUpdate', () => {
    const action = {
      type: UPDATE_FORM as typeof UPDATE_FORM,
      key: 'date',
      value: '04/20/69',
    };

    const expectedState = {
      values: {
        date: '04/20/69',
      },
      errors: {},
      valid: {},
      showErrorMessage: false,
    };

    expect(form(initialState, action)).toEqual(expectedState);
  });

  test('UPDATE_FORM with arrayUpdate', () => {
    const action = {
      type: UPDATE_FORM as typeof UPDATE_FORM,
      key: 'date',
      value: '20/05/97',
      arrayUpdate: true,
    };

    const newInitialState = {
      ...initialState,
      values: {
        date: '04/20/69',
      },
    };

    const expectedState = {
      values: {
        date: '20/05/97',
      },
      errors: {},
      valid: {},
      showErrorMessage: false,
    };

    expect(form(newInitialState, action)).toEqual(expectedState);
  });

  test('SET_ERRORS', () => {
    const action = {
      type: SET_ERRORS as typeof SET_ERRORS,
      errorsList: {
        isInvalidAddress: true,
      },
      valid: {},
      showErrorMessage: true,
    };
    const expectedState = {
      values: {},
      errors: {
        isInvalidAddress: true,
      },
      valid: {},
      showErrorMessage: true,
    };

    expect(form(initialState, action)).toEqual(expectedState);
  });

  test('SET_FORM_ERRORS', () => {
    const action = {
      type: SET_FORM_ERRORS as typeof SET_FORM_ERRORS,
      error: 'Your address is invalid',
    };

    const expectedState = {
      values: {},
      errors: {
        form: 'Your address is invalid',
      },
      valid: {},
      showErrorMessage: true,
    };

    expect(form(initialState, action)).toEqual(expectedState);
  });

  test('SET_VALID', () => {
    const action = {
      type: SET_VALID as typeof SET_VALID,
      validList: {
        name: true,
      },
      valid: {},
    };
    const expectedState = {
      values: {},
      errors: {},
      valid: {
        name: true,
      },
      showErrorMessage: false,
    };

    expect(form(initialState, action)).toEqual(expectedState);
  });

  test('CLEAR_FORM_ERRORS', () => {
    const action = {
      type: CLEAR_FORM_ERRORS as typeof CLEAR_FORM_ERRORS,
    };

    const newInitialState = {
      ...initialState,
      values: {
        testValue: 'test',
      },
      errors: {
        isInvalidAddress: true,
      },
      valid: {},
      showErrorMessage: true,
    };

    const expectedState = {
      values: {
        testValue: 'test',
      },
      errors: {},
      valid: {},
      showErrorMessage: false,
    };

    expect(form(newInitialState, action)).toEqual(expectedState);
  });

  test('RESET_VALIDATION', () => {
    const action = {
      type: RESET_VALIDATION as typeof RESET_VALIDATION,
      key: 'name',
    };

    const newInitialState = {
      ...initialState,
      errors: {
        name: 'You must enter your name',
        surname: 'You must enter your surname',
      },
      valid: {
        name: true,
        phone: true,
      },
    };

    const expectedState = {
      values: {},
      errors: { surname: 'You must enter your surname' },
      valid: { phone: true },
      showErrorMessage: false,
    };

    expect(form(newInitialState, action)).toEqual(expectedState);
  });

  test('CLEAR_FORM', () => {
    const action = {
      type: CLEAR_FORM as typeof CLEAR_FORM,
    };

    const newInitialState = {
      ...initialState,
      values: {
        testValue: 'test',
      },
      errors: {
        isInvalidAddress: true,
      },
      valid: {},
      showErrorMessage: true,
    };

    const expectedState = {
      values: {},
      errors: {},
      valid: {},
      showErrorMessage: false,
    };

    expect(form(newInitialState, action)).toEqual(expectedState);
  });
});
