import classNames from 'classnames';
import React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './radio.module.css';

export enum RadioType {
  Default,
  Button,
}

interface IRadioProps extends IRadioConfig {
  name: string;
  id: string;
  isChecked: boolean;
  label: string;
  value: string;
  onChange: (val) => void;
}

interface IRadioConfig {
  label: string;
  value: string;
}

export interface IRadioGroupProps {
  items: IRadioConfig[];
  name: string;
  handleChange: (event) => void;
  selectedValue: string;
  groupLabel?: string;
  hidden: boolean;
  type: RadioType;
}

const Radio: React.FC<IRadioProps> = ({ id, isChecked, label, name, value, onChange }) => {
  return (
    <div className={classNames(styles.radio, { [styles.checked]: isChecked })} data-test="component-radio">
      <input id={id} name={name} onChange={onChange} type="radio" value={value} checked={isChecked} />
      <Text
        htmlFor={id}
        element={'label'}
        type={TextStyles.caption}
        color={isChecked ? ColorStyles.secondary : ColorStyles.primary}
      >
        {label}
      </Text>
    </div>
  );
};

const RadioGroup: React.FC<IRadioGroupProps> = ({
  items,
  name,
  handleChange,
  selectedValue,
  groupLabel,
  hidden,
  type,
}) => {
  const radioValue = selectedValue;

  return (
    <fieldset
      className={classNames(styles.radioGroup, { [styles.button]: type === RadioType.Button })}
      data-test="component-radio-group"
      style={{ display: hidden ? 'none' : 'block' }}
    >
      <Text element="legend" type={TextStyles.label}>
        {groupLabel}
      </Text>

      <div className={styles.radioGroupWrapper}>
        {items &&
          items.map((item, i) => {
            const { label, value } = item;
            const id = `${name}-${i}`;

            return (
              <Radio
                id={id}
                key={i}
                label={label}
                value={value}
                name={name}
                isChecked={value === radioValue ? true : false}
                onChange={(e) => {
                  let updatedValue = e.target.value;

                  if (updatedValue === 'false') {
                    updatedValue = false;
                  } else if (updatedValue === 'true') {
                    updatedValue = true;
                  }

                  handleChange(updatedValue);
                }}
              />
            );
          })}
      </div>
    </fieldset>
  );
};

export { Radio };

export default RadioGroup;
