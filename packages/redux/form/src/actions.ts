import { CLEAR_FORM, CLEAR_FORM_ERRORS, INIT_FORM, SET_ERRORS, SET_FORM_ERRORS, UPDATE_FORM } from './types';

export const initForm = (payload) => {
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

export const updateForm = (key, value, arrayUpdate = false) => {
  return {
    type: UPDATE_FORM,
    key,
    value,
    arrayUpdate,
  };
};

export const setErrors = (errorsList, showErrorMessage = false) => {
  return {
    type: SET_ERRORS,
    errorsList,
    showErrorMessage,
  };
};

export const setFormErrors = (error) => {
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
