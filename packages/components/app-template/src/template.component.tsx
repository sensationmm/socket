import * as React from 'react';
import { useTranslation } from 'react-i18next';

import CookieNotice from '@somo/pda-components-cookie-notice/src';

import './core.css';

import * as styles from './template.module.css';

interface IAppProps {
  hideCookieNotice?: boolean;
}

const AppTemplate: React.FC<IAppProps> = ({ children, hideCookieNotice = false }) => {
  const [t] = useTranslation();

  return (
    <>
      <div className={styles.app}>{children}</div>
      {!hideCookieNotice && (
        <div className={styles.cookieNoticeWrapper}>
          <CookieNotice
            title={t('site.cookieNotice.title')}
            text={t('site.cookieNotice.text')}
            link={{ text: t('site.cookieNotice.link.text'), address: t('site.cookieNotice.link.address') }}
            cta={{ agree: t('site.cookieNotice.cta.agree'), disagree: t('site.cookieNotice.cta.disagree') }}
          />
        </div>
      )}
    </>
  );
};

export default AppTemplate;
