import functions from '@somo/pda-utils-functions/src';
import React from 'react';
import { isArray } from 'util';

import { actions } from '@somo/pda-redux-form/src';
import validation from '@somo/pda-utils-validation/src';
import store from '../../../apps/www/src/state/store';

import * as styles from './form.module.css';

const { initForm, clearForm, updateForm, setErrors, setFormErrors } = actions;

export interface IFormConfig {
  id: string;
  label: string;
  value?: string;
  component: React.ReactType;
  stateKey: string;
  onChange?: () => void;
  validationFunction?: string | string[];
  validationParam?: string | any[];
  hidden?: boolean;
  callback?: () => void;
}

// Output default values/error state required by form setup
export const initFormState = (fieldsInit: object, fieldsValues?: object) => {
  const fields = !isArray(fieldsInit) ? fieldsInit : new Array(...fieldsInit);
  const errors = !isArray(fieldsInit) ? {} : { fields: fieldsInit.map(() => new Object()) };

  const fieldsKeys = Object.keys(fields);

  if (fieldsValues) {
    fieldsKeys.forEach((key) => {
      fields[key] = fieldsValues[key]; // @TODO ideally only this line should be necessary...
    });
  }

  return store.dispatch(
    initForm({
      values: fields,
      errors,
      showErrorMessage: false,
    }),
  );
};

// Clears all form config from redux
export const clearFormState = () => {
  store.dispatch(clearForm());
};

// Sets form error in redux
export const setFormError = (error: string) => {
  store.dispatch(setFormErrors(error));

  window.scrollTo(0, 0);
};

// Helper function to update state.values item
export const updateValue = (stateKey: string, value: any, callback?, arrayUpdate: boolean = false) => {
  store.dispatch(updateForm(stateKey, value, arrayUpdate));

  if (callback) {
    callback(value);
  }
};

// Validates field, sets state.error value for field if validation fails
export const validateField = (config: IFormConfig[], stateID: string, arrayIndex?: number) => {
  const { values, errors } = store.getState().form;
  const errorsList = !errors.fields ? errors : errors.fields;

  const configItem = functions.getByValue(config, 'stateKey', stateID);

  const valueToCheck = arrayIndex === undefined ? values[stateID] : values[arrayIndex][stateID];

  const validationList = !isArray(configItem.validationFunction)
    ? configItem.validationFunction
      ? new Array(configItem.validationFunction)
      : undefined
    : configItem.validationFunction;

  const validationParamList = !isArray(configItem.validationParam)
    ? new Array(configItem.validationParam)
    : configItem.validationParam;

  if (configItem && validationList && !configItem.hidden) {
    let isValid = true;
    let failFunc;

    for (let i = 0; i < validationList.length; i++) {
      isValid =
        validationParamList[i] !== undefined && validationParamList[i] !== null
          ? validation[validationList[i]](valueToCheck, validationParamList[i])
          : validation[validationList[i]](valueToCheck);

      if (!isValid) {
        failFunc = validationList[i];
        break;
      }
    }

    if (!isValid) {
      if (arrayIndex !== undefined) {
        errorsList[arrayIndex][stateID] = validation.messages[failFunc];
      } else {
        errorsList[stateID] = validation.messages[failFunc];
      }
    } else {
      if (arrayIndex !== undefined) {
        delete errorsList[arrayIndex][stateID];
      } else {
        delete errorsList[stateID];
      }
    }

    const newErrors = !errors.fields ? errorsList : { ...errors, fields: errorsList };

    store.dispatch(setErrors(newErrors, errors.form && errors.form !== ''));
  }
};

// Validates every field defined in the this.config parent object that has a validationFunction prop defined
export const validateForm = (config: IFormConfig[], arrayIndex?: number) => {
  config.forEach((configItem) => {
    if (configItem.stateKey && configItem.validationFunction) {
      formUtils.validateField(config, configItem.stateKey, arrayIndex);
    }
  });

  const errors = store.getState().form.errors;
  delete errors.form;

  const checkErrors = arrayIndex === undefined ? errors : errors.fields[arrayIndex];

  if (Object.keys(checkErrors).length > 0) {
    store.dispatch(setErrors(errors, true));

    window.scrollTo(0, 0);

    return false;
  } else {
    return true;
  }
};

// Renders form defined in this.config of parent
export const renderForm = (config: IFormConfig[], arrayIndex?: number) => {
  const { errors, showErrorMessage } = store.getState().form;

  return (
    <div>
      {showErrorMessage && (
        <div className={styles.errorBox} data-test="create-error-box">
          {errors.form ? errors.form : 'Please correct all errors to proceed'}
        </div>
      )}

      <div data-test="form-fields" className={styles.formFields}>
        {formUtils.renderFormFields(config, arrayIndex)}
      </div>
    </div>
  );
};

// Renders form fields
export const renderFormFields = (config: IFormConfig[], arrayIndex?: number) => {
  const { errors } = store.getState().form;

  return config.map((item, key) => {
    const { stateKey, validationFunction, hidden, callback } = item;

    if (hidden) {
      return;
    }

    // istanbul ignore next - bug in arrow function coverage
    const onChange = stateKey ? (val) => formUtils.updateValue(stateKey, val, callback) : undefined;
    // istanbul ignore next - bug in arrow function coverage
    const validate = validationFunction ? () => formUtils.validateField(config, stateKey, arrayIndex) : undefined;

    let error;
    if (!errors.fields) {
      if (functions.objectKeyExists(stateKey, errors)) {
        error = errors[stateKey];
      }
    } else {
      if (arrayIndex !== undefined) {
        if (functions.objectKeyExists(stateKey, errors.fields[arrayIndex])) {
          error = errors.fields[arrayIndex][stateKey];
        }
      }
    }

    const Component: React.ReactType = item.component;

    return (
      <Component
        key={`form-item-${key}`}
        data-test={`form-item-${key}`}
        id={stateKey}
        handleChange={item.onChange ? item.onChange : onChange}
        {...item}
        error={error}
        validate={validate}
      />
    );
  });
};

const formUtils = {
  initFormState,
  setFormError,
  clearFormState,
  updateValue,
  validateField,
  validateForm,
  renderForm,
  renderFormFields,
};

export default formUtils;
