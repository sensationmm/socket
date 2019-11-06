import { IFormState } from './reducers';
import {
  CLEAR_FORM,
  CLEAR_FORM_ERRORS,
  IClearForm,
  IClearFormErrors,
  IInitForm,
  INIT_FORM,
  ISetErrors,
  ISetFormErrors,
  IUpdateForm,
  SET_ERRORS,
  SET_FORM_ERRORS,
  UPDATE_FORM,
} from './types';

export const initForm = (payload: IFormState): IInitForm => {
  return {
    type: INIT_FORM,
    payload,
  };
};

export const clearForm = (): IClearForm => {
  return {
    type: CLEAR_FORM,
  };
};

export const updateForm = (key: string, value: any, arrayUpdate = false): IUpdateForm => {
  return {
    type: UPDATE_FORM,
    key,
    value,
    arrayUpdate,
  };
};

export const setErrors = (errorsList: IFormState['errors'], showErrorMessage = false): ISetErrors => {
  return {
    type: SET_ERRORS,
    errorsList,
    showErrorMessage,
  };
};

export const setFormErrors = (error: string): ISetFormErrors => {
  return {
    type: SET_FORM_ERRORS,
    error,
  };
};

export const clearFormErrors = (): IClearFormErrors => {
  return {
    type: CLEAR_FORM_ERRORS,
  };
};
