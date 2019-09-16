import * as React from 'react';

// @ts-ignore
import './core.css';

// @ts-ignore
import * as styles from './template.module.css';

const AppTemplate: React.FC = ({ children }) => {
  return <div className={styles.app}>{children}</div>;
};

export default AppTemplate;
