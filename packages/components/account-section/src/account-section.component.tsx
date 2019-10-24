import cx from 'classnames';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './account-section.module.css';

export interface IAccountSectionProps {
  className?: string;
  title: string;
  subtitle?: string;
  disabled?: boolean;
}

const AccountSection: React.FC<IAccountSectionProps> = ({ className, title, subtitle, disabled, children }) => (
  <div className={cx(className, styles.accountSection, { [styles.disabled]: disabled })}>
    <div className={styles.header}>
      <div className={styles.leftPanel}>
        <Text type={TextStyles.h2} color={ColorStyles.primary} element="h2">
          {title}
        </Text>
        {subtitle && (
          <Text type={TextStyles.supportCopy} color={ColorStyles.primary} element="p">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default AccountSection;
