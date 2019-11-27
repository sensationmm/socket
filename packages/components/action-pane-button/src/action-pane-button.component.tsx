import * as React from 'react';

import { Edit } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import styles from './action-pane-button.module.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconTypes;
  text?: string;
}

const ICONS = {
  edit: Edit,
};

export enum IconTypes {
  default = 'none',
  edit = 'edit',
}

const ActionPaneBtn: React.FC<IButtonProps> = ({ icon = IconTypes.default, text, ...props }) => {
  return (
    <button className={styles.actionPaneBtn} {...props}>
      {icon && ICONS[icon] && <SVG children={ICONS[IconTypes[icon]]} size={26} className={styles.icon} />}
      {text && (
        <Text type={TextStyles.edit} color={ColorStyles.primary}>
          {text}
        </Text>
      )}
    </button>
  );
};

export default ActionPaneBtn;
