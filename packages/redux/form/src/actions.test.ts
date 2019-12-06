import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions, types } from '.';

const {
  clearForm,
  clearFormErrors,
  initForm,
  resetValidation,
  setError,
  setErrors,
  setFormErrors,
  setValid,
  updateForm,
} = actions;
const {
  CLEAR_FORM,
  CLEAR_FORM_ERRORS,
  INIT_FORM,
  RESET_VALIDATION,
  SET_ERROR,
  SET_ERRORS,
  SET_FORM_ERRORS,
  SET_VALID,
  UPDATE_FORM,
} = types;

const mockStore = configureMockStore([thunk]);

describe('Loader actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('initForm', () => {
    store.dispatch(initForm({ values: {}, errors: {}, valid: {}, showErrorMessage: false }));
    expect(store.getActions()).toEqual([
      { type: INIT_FORM, payload: { values: {}, errors: {}, valid: {}, showErrorMessage: false } },
    ]);
  });

  test('clearForm', () => {
    store.dispatch(clearForm());
    expect(store.getActions()).toEqual([{ type: CLEAR_FORM }]);
  });

  test('updateForm', () => {
    store.dispatch(updateForm('date', '20/05/1997'));
    expect(store.getActions()).toEqual([{ type: UPDATE_FORM, key: 'date', value: '20/05/1997', arrayUpdate: false }]);
  });

  test('updateForm array', () => {
    store.dispatch(updateForm('date', '20/05/1997', true));
    expect(store.getActions()).toEqual([{ type: UPDATE_FORM, key: 'date', value: '20/05/1997', arrayUpdate: true }]);
  });

  test('setError', () => {
    store.dispatch(setError('password', 'Invalid'));
    expect(store.getActions()).toEqual([
      { type: SET_ERROR, key: 'password', error: 'Invalid', showErrorMessage: false },
    ]);
  });

  test('setErrors', () => {
    store.dispatch(setErrors({ invalidAddress: true }, true));
    expect(store.getActions()).toEqual([
      { type: SET_ERRORS, errorsList: { invalidAddress: true }, showErrorMessage: true },
    ]);
  });

  test('setFormErrors', () => {
    store.dispatch(setFormErrors('Your address in invalid'));
    expect(store.getActions()).toEqual([{ type: SET_FORM_ERRORS, error: 'Your address in invalid' }]);
  });

  test('setValid', () => {
    store.dispatch(setValid({ name: true }));
    expect(store.getActions()).toEqual([{ type: SET_VALID, validList: { name: true } }]);
  });

  test('clearFormErrors', () => {
    store.dispatch(clearFormErrors());
    expect(store.getActions()).toEqual([{ type: CLEAR_FORM_ERRORS }]);
  });

  test('resetValidation', () => {
    store.dispatch(resetValidation('name'));
    expect(store.getActions()).toEqual([{ type: RESET_VALIDATION, key: 'name' }]);
  });
});
