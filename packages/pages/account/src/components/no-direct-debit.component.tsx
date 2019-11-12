import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './no-direct-debit.module.css';

const NoDirectDebit: React.FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.noDirectDebit}>
      <Text type={TextStyles.body} color={ColorStyles.tertiary}>
        {t('site.account.payment.noDirectDebit.text')}{' '}
        <a href={t('site.account.payment.noDirectDebit.cta.link')} target="_self">
          {t('site.account.payment.noDirectDebit.cta.text')}
        </a>
        .
      </Text>
    </div>
  );
};

export default NoDirectDebit;
