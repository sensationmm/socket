export const INIT_FORM = '@SOCKET/INIT_FORM';
export const CLEAR_FORM = '@SOCKET/CLEAR_FORM';
export const UPDATE_FORM = '@SOCKET/UPDATE_FORM';
export const SET_ERRORS = '@SOCKET/SET_ERRORS';
export const SET_FORM_ERRORS = '@SOCKET/SET_FORM_ERRORS';
export const CLEAR_FORM_ERRORS = '@SOCKET/CLEAR_FORM_ERRORS';

import { IFormState } from './reducers';

export type Action = IInitForm | IClearForm | IUpdateForm | ISetErrors | ISetFormErrors | IClearFormErrors;

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

export interface ISetErrors {
  type: typeof SET_ERRORS;
  errorsList: IFormState['errors'];
  showErrorMessage: boolean;
}

export interface ISetFormErrors {
  type: typeof SET_FORM_ERRORS;
  error: string;
}

export interface IClearFormErrors {
  type: typeof CLEAR_FORM_ERRORS;
}
