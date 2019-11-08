import cx from 'classnames';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './account-section.module.css';

export interface IAccountSectionProps {
  className?: string;
  title: string;
  subtitle?: string;
  actionPane?: any;
  disabled?: boolean;
  hasGap?: boolean;
}

const AccountSection: React.FC<IAccountSectionProps> = ({
  className,
  title,
  subtitle,
  actionPane,
  disabled,
  hasGap,
  children,
}) => (
  <div className={cx(className, styles.accountSection, { [styles.disabled]: disabled }, { [styles.gap]: hasGap })}>
    <div className={styles.header}>
      <div>
        <Text type={TextStyles.h2} color={ColorStyles.primary} element="h2">
          {title}
        </Text>
        {subtitle && (
          <Text type={TextStyles.supportCopy} color={ColorStyles.primary} element="p">
            {subtitle}
          </Text>
        )}
      </div>
      {actionPane && <div>{actionPane}</div>}
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default AccountSection;
