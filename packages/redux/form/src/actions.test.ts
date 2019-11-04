import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions, types } from '.';

const { clearForm, clearFormErrors, initForm, setErrors, setFormErrors, updateForm } = actions;
const { CLEAR_FORM, CLEAR_FORM_ERRORS, INIT_FORM, SET_ERRORS, SET_FORM_ERRORS, UPDATE_FORM } = types;

const mockStore = configureMockStore([thunk]);

describe('Loader actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('initForm', () => {
    store.dispatch(initForm({ values: {}, errors: {}, showErrorMessage: false }));
    expect(store.getActions()).toEqual([
      { type: INIT_FORM, payload: { values: {}, errors: {}, showErrorMessage: false } },
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

  test('clearFormErrors', () => {
    store.dispatch(clearFormErrors());
    expect(store.getActions()).toEqual([{ type: CLEAR_FORM_ERRORS }]);
  });
});
