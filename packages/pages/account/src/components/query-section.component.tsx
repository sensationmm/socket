import cx from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AccountSection from '@somo/pda-components-account-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './query-section.module.css';

interface IQuerySectionProps {
  className?: string;
  title: string;
  subtitle: string;
  hasGap?: boolean;
  Component: React.ComponentType<any>;
  loading?: boolean;
  error?: boolean;
  values?: {
    [key: string]: any;
  };
}

const QuerySection: React.FC<IQuerySectionProps> = ({
  title,
  subtitle,
  Component,
  loading,
  error,
  values,
  hasGap,
  className,
}) => {
  const [t] = useTranslation();

  return (
    <AccountSection title={title} subtitle={subtitle} className={cx(styles.querySection, className)} hasGap={hasGap}>
      {loading && (
        <div className={styles.messageContainer}>
          <Text element="p" type={TextStyles.body} color={ColorStyles.primary}>
            {t('site.account.loadingGenericMessage')}
          </Text>
        </div>
      )}
      {error && (
        <div className={styles.messageContainer}>
          <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
            {t('site.account.errorGenericMessage')}
          </Text>
        </div>
      )}
      {values && <Component values={values} />}
    </AccountSection>
  );
};

export default QuerySection;
