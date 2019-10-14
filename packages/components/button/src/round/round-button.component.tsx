import * as React from 'react';

import BaseButton from '../base';
import { IBaseButtonProps } from '../base/base-button.component';

import * as styles from './round-button.module.css';

const RoundButton: React.FC<IBaseButtonProps> = (props) => <BaseButton styles={styles} {...props} />;

export default RoundButton;
