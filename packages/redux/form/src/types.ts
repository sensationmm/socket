export const INIT_FORM = '@SOCKET/INIT_FORM';
export const CLEAR_FORM = '@SOCKET/CLEAR_FORM';
export const UPDATE_FORM = '@SOCKET/UPDATE_FORM';
export const SET_ERROR = '@SOCKET/SET_ERROR';
export const SET_ERRORS = '@SOCKET/SET_ERRORS';
export const SET_FORM_ERRORS = '@SOCKET/SET_FORM_ERRORS';
export const SET_VALID = '@SOCKET/SET_VALID';
export const CLEAR_FORM_ERRORS = '@SOCKET/CLEAR_FORM_ERRORS';
export const RESET_VALIDATION = '@SOCKET/RESET_VALIDATION';

import { IFormState } from './reducers';

export type Action =
  | IInitForm
  | IClearForm
  | IUpdateForm
  | ISetError
  | ISetErrors
  | ISetFormErrors
  | ISetValid
  | IClearFormErrors
  | IResetValidation;

export interface IInitForm {
  type: typeof INIT_FORM;
  payload: IFormState;
}

export interface IClearForm {
  type: typeof CLEAR_FORM;
}

export interface IUpdateForm {
  type: typeof UPDATE_FORM;
  key: string;
  value: any;
  arrayUpdate?: boolean;
}

export interface ISetError {
  type: typeof SET_ERROR;
  key: string;
  error: string;
  showErrorMessage: boolean;
}

export interface ISetErrors {
  type: typeof SET_ERRORS;
  errorsList: IFormState['errors'];
  showErrorMessage: boolean;
}

export interface ISetFormErrors {
  type: typeof SET_FORM_ERRORS;
  error: string;
}

export interface ISetValid {
  type: typeof SET_VALID;
  validList: IFormState['valid'];
}

export interface IClearFormErrors {
  type: typeof CLEAR_FORM_ERRORS;
}

export interface IResetValidation {
  type: typeof RESET_VALIDATION;
  key: string;
}
