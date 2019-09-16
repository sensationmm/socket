import * as React from 'react';

import BaseButton from '../base';
import { IBaseButtonProps } from '../base/base-button.component';

// @ts-ignore
import * as styles from './secondary-button.module.css';

const SecondaryButton: React.FC<IBaseButtonProps> = (props) => <BaseButton styles={styles} {...props} />;

export default SecondaryButton;
