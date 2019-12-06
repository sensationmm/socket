import React from 'react';

import { actions } from '@somo/pda-redux-form/src';
import functions from '@somo/pda-utils-functions/src';
import validation from '@somo/pda-utils-validation/src';
import store from '@somo/pda-www-state/store';

import Radio, { IRadioGroupProps } from '@somo/pda-components-radio/src';

import * as styles from './form.module.css';

const { initForm, clearForm, updateForm, resetValidation, setError, setErrors, setFormErrors, setValid } = actions;

export interface IFormConfig {
  id: string;
  label: string;
  value?: string;
  component: React.ElementType;
  stateKey: string;
  onChange?: () => void;
  onFocus?: () => void;
  validationFunction?: string | string[];
  validationParam?: string | any[];
  hidden?: boolean;
  callback?: () => void;
  groupLabel?: string;
  selectedValue?: string;
  items?: IRadioGroupProps['items'];
}

export const initFormState = (fieldsInit: object, fieldsValues?: object) => {
  const fields = !Array.isArray(fieldsInit) ? fieldsInit : new Array(...fieldsInit);
  const errors = !Array.isArray(fieldsInit) ? {} : { fields: fieldsInit.map(() => new Object()) };
  const valid = !Array.isArray(fieldsInit) ? {} : { fields: fieldsInit.map(() => new Object()) };

  const fieldsKeys = Object.keys(fields);

  if (fieldsValues) {
    fieldsKeys.forEach((key) => {
      fields[key] = fieldsValues[key];
    });
  }

  return store.dispatch(
    initForm({
      values: fields,
      errors,
      valid,
      showErrorMessage: false,
    }),
  );
};

export const clearFormState = () => {
  store.dispatch(clearForm());
};

export const setFieldError = (key: string, error: string) => {
  store.dispatch(setError(key, error, true));
};

export const setFormError = (error: string) => {
  store.dispatch(setFormErrors(error));

  window.scrollTo(0, 0);
};

export const updateValue = (stateKey: string, value: any, callback?, arrayUpdate = false) => {
  store.dispatch(updateForm(stateKey, value, arrayUpdate));

  if (callback) {
    callback(value);
  }
};

export const validateField = (config: IFormConfig[], stateID: string, arrayIndex?: number) => {
  const { values, errors, valid } = store.getState().form;
  const errorsList = !errors.fields ? errors : errors.fields;
  const validList = !valid.fields ? valid : valid.fields;

  const configItem = functions.getByValue(config, 'stateKey', stateID);

  const valueToCheck = arrayIndex === undefined ? values[stateID] : values[arrayIndex][stateID];

  const validationList = !Array.isArray(configItem.validationFunction)
    ? configItem.validationFunction
      ? new Array(configItem.validationFunction)
      : undefined
    : configItem.validationFunction;

  const validationParamList = !Array.isArray(configItem.validationParam)
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
        delete validList[arrayIndex][stateID];
      } else {
        errorsList[stateID] = validation.messages[failFunc];
        delete validList[stateID];
      }
    } else if (valueToCheck) {
      if (arrayIndex !== undefined) {
        delete errorsList[arrayIndex][stateID];
        validList[arrayIndex][stateID] = true;
      } else {
        delete errorsList[stateID];
        validList[stateID] = true;
      }
    }

    const newErrors = !errors.fields ? errorsList : { ...errors, fields: errorsList };
    const newValid = !valid.fields ? validList : { ...valid, fields: validList };

    store.dispatch(setErrors(newErrors, errors.form && errors.form !== ''));
    store.dispatch(setValid(newValid));
  } else if (!validationList && valueToCheck) {
    if (arrayIndex !== undefined && validList[arrayIndex]) {
      validList[arrayIndex][stateID] = true;
    } else {
      validList[stateID] = true;
    }
    const newValid = !valid.fields ? validList : { ...valid, fields: validList };
    store.dispatch(setValid(newValid));
  }
};

export const validateForm = (config: IFormConfig[], arrayIndex?: number): boolean => {
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
  }

  return true;
};

export const renderForm = (config: IFormConfig[], arrayIndex?: number): JSX.Element => {
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

export const renderFormFields = (config: IFormConfig[], arrayIndex?: number) => {
  const { errors, valid } = store.getState().form;

  return config.map((item, key) => {
    const { stateKey, hidden, callback } = item;

    if (hidden) {
      return;
    }

    // istanbul ignore next - bug in arrow function coverage
    const onChange = stateKey ? (val) => formUtils.updateValue(stateKey, val, callback) : undefined;
    // istanbul ignore next - bug in arrow function coverage
    const validate = () => formUtils.validateField(config, stateKey, arrayIndex);
    const onFocus = () => store.dispatch(resetValidation(stateKey));

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

    let validField;
    if (!valid.fields) {
      if (functions.objectKeyExists(stateKey, valid)) {
        validField = valid[stateKey];
      }
    } else {
      if (arrayIndex !== undefined) {
        if (functions.objectKeyExists(stateKey, valid.fields[arrayIndex])) {
          validField = valid.fields[arrayIndex][stateKey];
        }
      }
    }

    const Component: React.ElementType = item.component;

    if (Component === Radio) {
      item.selectedValue = item.value;
      item.groupLabel = item.label;
      delete item.value;
      delete item.label;
    }

    return (
      <Component
        key={`form-item-${key}`}
        data-test={`form-item-${key}`}
        id={stateKey}
        handleChange={item.onChange ? item.onChange : onChange}
        {...item}
        handleFocus={onFocus}
        error={error}
        valid={validField}
        validate={validate}
      />
    );
  });
};

const formUtils = {
  initFormState,
  setFieldError,
  setFormError,
  clearFormState,
  updateValue,
  validateField,
  validateForm,
  renderForm,
  renderFormFields,
};

export default formUtils;
