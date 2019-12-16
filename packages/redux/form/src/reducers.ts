import {
  Action,
  CLEAR_FORM,
  CLEAR_FORM_ERRORS,
  INIT_FORM,
  RESET_VALIDATION,
  SET_ERROR,
  SET_ERRORS,
  SET_FORM_ERRORS,
  SET_VALID,
  UPDATE_FORM,
} from './types';

export interface IFormState {
  values: { [key: string]: any };
  errors: { [key: string]: any };
  valid: { [key: string]: any };
  showErrorMessage: boolean;
}

export const initialState: IFormState = {
  values: {},
  errors: {},
  valid: {},
  showErrorMessage: false,
};

const reducer = (state = initialState, action: Action): IFormState => {
  let newValues;

  switch (action.type) {
    case INIT_FORM:
      return action.payload;

    case UPDATE_FORM:
      if (!action.arrayUpdate) {
        newValues = {
          ...state.values,
          [action.key]: action.value,
        };
      } else {
        newValues = state.values;
        newValues[action.key] = action.value;
      }

      return {
        ...state,
        values: newValues,
      };

    case SET_ERROR:
      const removeValid = state.valid;
      delete removeValid[action.key];

      return {
        ...state,
        errors: {
          ...state.errors,
          [action.key]: action.error,
        },
        valid: removeValid,
        showErrorMessage: action.showErrorMessage,
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.errorsList,
        showErrorMessage: action.showErrorMessage,
      };

    case SET_VALID:
      return {
        ...state,
        valid: action.validList,
      };

    case SET_FORM_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          form: action.error,
        },
        showErrorMessage: true,
      };

    case CLEAR_FORM_ERRORS:
      return {
        ...state,
        errors: {},
        showErrorMessage: false,
      };

    case RESET_VALIDATION:
      const newErrors = state.errors;
      const newValid = state.valid;
      delete newErrors[action.key];
      delete newErrors.form;
      delete newValid[action.key];

      return {
        ...state,
        errors: newErrors,
        valid: newValid,
        showErrorMessage: false,
      };

    case CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
};

export const form = reducer;
export const entities = {};
