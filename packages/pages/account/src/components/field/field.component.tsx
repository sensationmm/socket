import cx from 'classnames';
import React from 'react';

import { Edit } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './field.module.css';

interface IFieldProps {
  label: string;
  value: string;
  editable: boolean;
  editText: string;
  disabled?: boolean;
  borderStyle?: string;
  onEdit?: () => void;
}

export enum BorderStyles {
  light = 'light',
  dark = 'dark',
}

const Field = ({ label, value, disabled, editable, editText, onEdit, borderStyle = 'light' }: IFieldProps) => {
  const onEditClickHandler = () => {
    if (onEdit) {
      onEdit();
    }
  };

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
      {editable && (
        <button className={styles.editBtn} onClick={onEditClickHandler} data-testid="edit-btn">
          <SVG children={Edit} size={26} className={styles.editSvg} />
          {editText && (
            <Text type={TextStyles.edit} color={ColorStyles.primary}>
              {editText}
            </Text>
          )}
        </button>
      )}
    </div>
  );
};

export default Field;
