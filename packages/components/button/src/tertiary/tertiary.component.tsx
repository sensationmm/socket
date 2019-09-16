import * as React from 'react';

import BaseButton from '../base';
import { IBaseButtonProps } from '../base/base-button.component';

// @ts-ignore
import * as styles from './tertiary.module.css';

const TertiaryButton: React.FC<IBaseButtonProps> = ({ children, ...props }) => (
  <BaseButton styles={styles} {...props}>
    {children}
  </BaseButton>
);

export default TertiaryButton;
