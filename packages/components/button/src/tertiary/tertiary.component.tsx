import * as React from 'react';

import BaseButton from '../base';
import { IBaseButtonProps } from '../base/base-button.component';

import * as styles from './tertiary.module.css';

const TertiaryButton: React.FC<IBaseButtonProps> = (props) => <BaseButton styles={styles} {...props} />;

export default TertiaryButton;
