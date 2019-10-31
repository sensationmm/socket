import classNames from 'classnames';
import React from 'react';

import Text from '@somo/pda-components-text/src';
import Functions from '@somo/pda-utils-functions/src';

import * as styles from './base-input.module.css';

type InputType = 'text' | 'number' | 'password';

interface IInputProps {
  id: string;
  type: InputType;
  label?: string;
  onChange: (value: string) => void;
  onKeyPress?: () => void;
  value?: string | number;
  validate?: () => void;
  onFocus?: (e: React.FocusEvent<any>) => void;
  readOnly?: boolean;
  note?: string;
  error?: string;
  min?: number;
  max?: number;
  hidden?: boolean;
  wrapperClass?: string;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = ({
  id,
  type,
  label,
  onChange,
  onKeyPress,
  value,
  validate,
  onFocus,
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
            /* istanbul ignore else */
            if (onFocus) {
              onFocus(e);
            }
          }}
          placeholder={placeholder}
          onBlur={() => {
            if (!readOnly && validate) {
              validate();
            }
          }}
          onChange={(e) =>
            isCurrencyField ? onChange(Functions.stripCurrency(e.target.value)) : onChange(e.target.value)
          }
          onKeyPress={onKeyPress}
          value={isCurrencyField ? Functions.formatCurrency(value) : value}
          readOnly={readOnly}
          min={min}
          max={max}
        />
      </div>

      {note && (
        <div className={styles.textInputNote} data-test="text-input-note">
          <Text element="span" type="caption">
            {note}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Input;
