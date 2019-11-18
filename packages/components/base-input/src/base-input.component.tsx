import classNames from 'classnames';
import React from 'react';

import { Tick } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import Functions from '@somo/pda-utils-functions/src';

import * as styles from './base-input.module.css';

type InputType = 'text' | 'number' | 'password';

export interface IInputProps extends React.InputHTMLAttributes<any> {
  type: InputType;
  label?: string;
  validate: () => void;
  handleChange: (value: string) => void;
  handleKeyPress?: () => void;
  handleFocus?: (e: React.FocusEvent<any>) => void;
  note?: string;
  error?: string;
  valid?: boolean;
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
  valid,
  min,
  max,
  hidden,
  wrapperClass,
  placeholder,
}) => {
  const isCurrencyField = wrapperClass && wrapperClass.search('currency') > -1;
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div
      className={classNames(styles.textInput, wrapperClass)}
      data-test="component-input"
      style={{ display: hidden === true ? 'none' : 'block' }}
    >
      {label && (
        <Text htmlFor={id} element="label" type={TextStyles.label} color={!readOnly ? null : ColorStyles.quinary}>
          {label}
        </Text>
      )}

      <div
        className={classNames(
          styles.textInputWrapper,
          { [styles.error]: error },
          { [styles.readOnly]: readOnly },
          { [styles.active]: active },
        )}
      >
        {isCurrencyField && <div className={styles.textCurrencySymbol}>£</div>}
        <input
          data-test="component-input-field"
          type={type}
          id={id}
          onFocus={(e) => {
            setActive(true);
            if (handleFocus) {
              handleFocus(e);
            }
          }}
          placeholder={placeholder}
          onBlur={() => {
            setActive(false);
            if (!readOnly) {
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
          disabled={readOnly}
        />

        {valid && (
          <div className={styles.valid} data-test="input-valid">
            <SVG size={15}>{Tick}</SVG>
          </div>
        )}
      </div>

      {(error || note) && (
        <div className={styles.textInputNote} data-test={error ? 'text-input-error' : 'text-input-note'}>
          {error && (
            <Text element="span" type={TextStyles.caption} color={ColorStyles.error}>
              {error}
            </Text>
          )}

          {note && !error && (
            <Text element="span" type={TextStyles.caption} color={ColorStyles.quinary}>
              {note}
            </Text>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
