import i18n from '@somo/pda-utils-i18n/src';
import moment from 'moment';

interface IValidationMessages {
  [key: string]: string;
}

const validationMessages: IValidationMessages = {};

// validates email address
export const validateEmail = (email) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return re.test(email);
};
validationMessages.validateEmail = i18n.t('validation.validateEmail');

// validates numeric entry
export const validateNumeric = (input) => {
  if (input === '') {
    return false;
  }

  return !isNaN(input);
};
validationMessages.validateNumeric = i18n.t('validation.validateNumeric');

// validates required input
export const validateRequired = (input) => {
  return !!input && input !== '[undefined] undefined' && input !== '[null] null';
};
validationMessages.validateRequired = i18n.t('validation.validateRequired');

// validates phone number entry ie. (+00)00000...
export const validatePhone = (input) => {
  const inputVal = input ? input.substr(input.indexOf(')') + 1) : '';

  if (inputVal === '') {
    return false;
  }

  return !isNaN(inputVal) && inputVal.length >= 7 && inputVal.length <= 15;
};
validationMessages.validatePhone = i18n.t('validation.validatePhone');

// validates input matches given argument
export const validateMatching = (input, inputToMatch) => {
  return input === inputToMatch && !!input;
};
validationMessages.validateMatching = i18n.t('validation.validateMatching');

// validates input not matching given existing arguments
export const validateNotDuplicate = (input, inputToMatch: any[]) => {
  let notExisting = true;

  inputToMatch.forEach((existing) => {
    if (input === existing) {
      notExisting = false;
    }
  });

  return notExisting;
};
validationMessages.validateNotDuplicate = i18n.t('validation.validateNotMatching');

// validates letters only input
export const validateLettersOnly = (input) => {
  return !/[^a-zA-Z-\s]/.test(input);
};
validationMessages.validateLettersOnly = i18n.t('validation.validateLettersOnly');

// validates based on given cumulative total
export const validateTotal = (input: number, { total, maxValue }) => {
  validationMessages.validateTotal = i18n.t('validation.validateTotal', { max: { maxValue } });

  return input && total <= maxValue;
};

// validates on a minimum character length
export const validateMinimum = (value, min) => {
  validationMessages.validateMinimum = i18n.t('validation.validateMinimum', { min: { min } });

  return !value || (value && value.length >= min);
};

// validates minimum allowed value
export const validateMinValue = (value, min) => {
  validationMessages.validateMinValue = i18n.t('validation.validateMinValue', { min: { min } });

  return value >= min;
};

// validates no space chars
export const validateNoSpaces = (input) => {
  return !/[\s]/.test(input);
};
validationMessages.validateNoSpaces = i18n.t('validation.validateNoSpaces');

// validates date input
export const validateDate = (input) => {
  return /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(input);
};
validationMessages.validateDate = i18n.t('validation.validateDate');

// validates date in future
export const validateFutureDate = (input) => {
  const dateInput = moment(input, 'DD/MM/YYYY').format('YYYY-MM-DD');
  const today = moment().format('YYYY-MM-DD');

  return dateInput > today;
};
validationMessages.validateFutureDate = i18n.t('validation.validateFutureDate');

// validates date minimum
export const validateMinDate = (value, min) => {
  validationMessages.validateMinDate = i18n.t('validation.validateMinDate', { min: min.replace('/', '/') });

  const isAfter = moment(value, 'DD/MM/YYYY').isAfter(moment(min, 'DD/MM/YYYY'));
  const isSame = moment(value, 'DD/MM/YYYY').isSame(moment(min, 'DD/MM/YYYY'));

  return min === '' || isAfter || isSame;
};

// validates no special characters
export const validateNoSpecial = (input) => {
  return !/[^a-zA-Z0-9,.-\s]/.test(input);
};
validationMessages.validateNoSpecial = i18n.t('validation.validateNoSpecial');

const validation = {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMatching,
  validateNotDuplicate,
  validateNumeric,
  validateLettersOnly,
  validateTotal,
  validateMinimum,
  validateMinValue,
  validateNoSpaces,
  validateDate,
  validateFutureDate,
  validateNoSpecial,
  validateMinDate,
  messages: validationMessages,
};

export default validation;