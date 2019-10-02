import * as React from 'react';

import BaseButton from '../base';
import { IBaseButtonProps } from '../base/base-button.component';

// @ts-ignore
import * as styles from './outline.module.css';

const OutlineButton: React.FC<IBaseButtonProps> = (props) => <BaseButton styles={styles} {...props} />;

export default OutlineButton;
