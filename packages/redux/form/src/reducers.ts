import { Action, CLEAR_FORM, CLEAR_FORM_ERRORS, INIT_FORM, SET_ERRORS, SET_FORM_ERRORS, UPDATE_FORM } from './types';

export interface IFormState {
  values: { [key: string]: any };
  errors: { [key: string]: any };
  showErrorMessage: boolean;
}

export const initialState: IFormState = {
  values: {},
  errors: {},
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

    case SET_ERRORS:
      return {
        ...state,
        errors: action.errorsList,
        showErrorMessage: action.showErrorMessage,
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

    case CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
};

export const form = reducer;
export const entities = {};
