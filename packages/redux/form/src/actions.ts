import { IFormState } from './reducers';
import { CLEAR_FORM, CLEAR_FORM_ERRORS, INIT_FORM, SET_ERRORS, SET_FORM_ERRORS, UPDATE_FORM } from './types';

export const initForm = (payload: IFormState) => {
  return {
    type: INIT_FORM,
    payload,
  };
};

export const clearForm = () => {
  return {
    type: CLEAR_FORM,
  };
};

export const updateForm = (key: string, value: any, arrayUpdate = false) => {
  return {
    type: UPDATE_FORM,
    key,
    value,
    arrayUpdate,
  };
};

export const setErrors = (errorsList: IFormState['errors'], showErrorMessage = false) => {
  return {
    type: SET_ERRORS,
    errorsList,
    showErrorMessage,
  };
};

export const setFormErrors = (error: string) => {
  return {
    type: SET_FORM_ERRORS,
    error,
  };
};

export const clearFormErrors = () => {
  return {
    type: CLEAR_FORM_ERRORS,
  };
};
