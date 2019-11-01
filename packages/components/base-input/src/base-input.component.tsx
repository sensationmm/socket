import classNames from 'classnames';
import React from 'react';

import Text, { TextStyles } from '@somo/pda-components-text/src';
import Functions from '@somo/pda-utils-functions/src';

import * as styles from './base-input.module.css';

type InputType = 'text' | 'number' | 'password';

export interface IInputProps extends React.InputHTMLAttributes<any> {
  type: InputType;
  label?: string;
  validate?: () => void;
  handleChange: (value: string) => void;
  handleKeyPress?: () => void;
  handleFocus?: (e: React.FocusEvent<any>) => void;
  note?: string;
  error?: string;
  hidden?: boolean;
  wrapperClass?: string;
}

const Input: React.FC<IInputProps> = ({
  id,
  type,
  label,
  handleChange,
  handleKeyPress,
  value,
  validate,
  handleFocus,
  readOnly,
  note,
  error,
  min,
  max,
  hidden,
  wrapperClass,
  placeholder,
}) => {
  const isCurrencyField = wrapperClass && wrapperClass.search('currency') > -1;

  return (
    <div
      className={classNames(styles.textInput, wrapperClass)}
      data-test="component-input"
      style={{ display: hidden === true ? 'none' : 'block' }}
    >
      {label && (
        <label htmlFor={id} className={styles.textInputLabel}>
          {label}
        </label>
      )}

      {error && (
        <div data-test="text-input-error" className={styles.textInputRequired}>
          {error}
        </div>
      )}

      <div className={classNames(styles.textInputWrapper, { error: { error } }, { [styles.readOnly]: readOnly })}>
        {isCurrencyField && <div className={styles.textCurrencySymbol}>£</div>}
        <input
          data-test="component-input-field"
          type={type}
          id={id}
          onFocus={(e) => {
            if (handleFocus) {
              handleFocus(e);
            }
          }}
          placeholder={placeholder}
          onBlur={() => {
            if (!readOnly && validate) {
              validate();
            }
          }}
          onChange={(e) =>
            isCurrencyField ? handleChange(Functions.stripCurrency(e.target.value)) : handleChange(e.target.value)
          }
          onKeyPress={handleKeyPress}
          value={isCurrencyField ? Functions.formatCurrency(value as string | number) : value}
          readOnly={readOnly}
          min={min}
          max={max}
        />
      </div>

      {note && (
        <div className={styles.textInputNote} data-test="text-input-note">
          <Text element="span" type={TextStyles.caption}>
            {note}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Input;
