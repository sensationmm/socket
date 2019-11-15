import React from 'react';
import { useTranslation } from 'react-i18next';

import AccountSection from '@somo/pda-components-account-section/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './goal.module.css';

const Goal: React.FC = () => {
  const [t] = useTranslation();

  return (
    <AccountSection
      title={t('site.account.goal.title')}
      disabled={true}
      actionPane={
        <Text type={TextStyles.caption} color={ColorStyles.tertiary} className={styles.actionPaneText}>
          {t('site.account.goal.subTitle')}
        </Text>
      }
      className={styles.title}
    >
      <div className={styles.goalContent}>
        <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
          {t('site.account.goal.content')}
        </Text>
      </div>
    </AccountSection>
  );
};

export default Goal;
