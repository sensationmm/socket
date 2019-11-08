import React from 'react';

import * as styles from './gutter-layout.module.css';

const GutterLayout = ({ children }) => <div className={styles.gutter}>{children}</div>;

export default GutterLayout;
