import cx from 'classnames';
import React from 'react';

import ActionPaneBtn, { IconTypes } from '@somo/pda-components-action-pane-button/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './field.module.css';

interface IFieldProps {
  label: string;
  value: string;
  editable: boolean;
  editText: string;
  disabled?: boolean;
  borderStyle?: string;
  onEdit: () => any;
}

export enum BorderStyles {
  light = 'light',
  dark = 'dark',
}

const Field = ({ label, value, disabled, editable, editText, onEdit, borderStyle = 'light' }: IFieldProps) => {
  return (
    <div className={cx(styles.accountField, styles[borderStyle])}>
      <div className={styles.textWrapper}>
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
      {editable && <ActionPaneBtn icon={IconTypes.edit} text={editText} onClick={onEdit} data-testid="edit-btn" />}
    </div>
  );
};

export default Field;
