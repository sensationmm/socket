// TODO this is a component we will use just to demo this story and it needs to be removed when input fields will be in place
import cx from 'classnames';
import React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './account.module.css';

interface IFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
  borderStyle?: string;
}

export enum BorderStyles {
  light = 'light',
  dark = 'dark',
}

const Field = ({ label, value, disabled, borderStyle = 'light' }: IFieldProps) => (
  <div className={cx(styles.accountField, styles[borderStyle])}>
    <Text
      className={styles.label}
      type={TextStyles.label}
      color={disabled ? ColorStyles.quinary : ColorStyles.primary}
      element="p"
    >
      {label}
    </Text>
    <Text className={styles.value} type={TextStyles.segmentCopy} color={ColorStyles.tertiary} element="p">
      {value}
    </Text>
  </div>
);

export default Field;
