import * as React from 'react';

import './core.css';

import * as styles from './template.module.css';

const AppTemplate: React.FC = ({ children }) => {
  return <div className={styles.app}>{children}</div>;
};

export default AppTemplate;
