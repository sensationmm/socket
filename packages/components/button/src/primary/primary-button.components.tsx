import * as React from 'react';

import BaseButton from '../base';
import { IBaseButtonProps } from '../base/base-button.component';

import * as styles from './primary-button.module.css';

const PrimaryButton: React.FC<IBaseButtonProps> = (props) => <BaseButton styles={styles} {...props} />;

export default PrimaryButton;
