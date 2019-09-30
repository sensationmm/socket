import * as React from 'react';

import Text from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './404.module.css';

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorPageContent}>
      <Text element="h1" className={styles.errorPageTitle}>
        404
      </Text>
      <Text className={styles.errorPageSubTitle} element="h2">
        Subtitle
      </Text>
    </div>
  );
};

export default ErrorPage;
