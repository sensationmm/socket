import cx from 'classnames';
import * as React from 'react';

import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { inArray } from '@somo/pda-utils-functions/src';
import * as styles from './multi-select.module.css';

interface IMultiSelectProps {
  items: IMultiSelectOption[];
  value?: string[];
  id?: string;
  label?: string;
  error?: string;
  note?: string;
  readOnly?: boolean;
  handleChange: (selected) => void;
}

export interface IMultiSelectOption {
  label: string;
  icon: string;
  value: string;
}

const MultiSelect: React.FC<IMultiSelectProps> = ({
  items,
  value = [],
  id,
  label,
  readOnly,
  error,
  note,
  handleChange,
}) => {
  const onItemSelected = (option: IMultiSelectOption['value']) => {
    if (!readOnly) {
      let newOptions = value.slice();

      if (!inArray(option, newOptions)) {
        newOptions.push(option);
      } else {
        newOptions = newOptions.filter((opt) => opt !== option);
      }

      handleChange(newOptions);
    }
  };

  return (
    <div data-test="component-multi-select">
      {label && (
        <div className={styles.optionsLabel}>
          <Text
            data-test="select-label"
            htmlFor={id}
            element="label"
            type={TextStyles.label}
            color={!readOnly ? null : ColorStyles.quinary}
          >
            {label}
          </Text>
        </div>
      )}

      <div className={styles.optionsWrapper}>
        {items.map((option, index) => (
          <div
            data-test="multi-select-option"
            key={`option-${index}`}
            onClick={() => onItemSelected(option.value)}
            className={cx(
              styles.option,
              { [styles.selected]: value && inArray(option.value, value) },
              { [styles.readOnly]: readOnly },
            )}
          >
            <div className={styles.icon}>
              <SVG children={option.icon} size={60} />
            </div>
            <div className={styles.text}>
              <Text
                element="label"
                type={TextStyles.caption}
                color={inArray(option.value, value) ? ColorStyles.secondary : ColorStyles.quinary}
              >
                {option.label}
              </Text>
            </div>
          </div>
        ))}
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

export default MultiSelect;
