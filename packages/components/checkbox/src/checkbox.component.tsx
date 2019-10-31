import classNames from 'classnames';
import React from 'react';

import { Tick } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';

import * as styles from './checkbox.module.css';

interface ICheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  disabled?: boolean;
}

const checkbox: React.FC<ICheckboxProps> = ({ id, label, checked, onChange, error, disabled }) => {
  return (
    <div className={styles.checkbox} data-test="component-checkbox">
      <div
        data-test="component-checkbox-layout"
        className={styles.checkboxLayout}
        onClick={() => (disabled ? null : onChange(!checked))}
      >
        <div
          data-test="component-checkbox-toggle"
          className={classNames(
            styles.checkboxToggle,
            { [styles.checked]: checked },
            { [styles.error]: error },
            { [styles.disabled]: disabled },
          )}
        >
          <SVG children={Tick} width={'90%'} />
        </div>
        <label htmlFor={id} className={classNames(styles.checkboxLabel, { [styles.disabled]: disabled })}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default checkbox;
