import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { Primary as PrimaryBtn } from '@somo/pda-components-button/src';
import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { CookiesKeys, get, set } from '@somo/pda-utils-cookies/src';

import * as styles from './cookie-notice.module.css';

export interface ICookieNoticeProps {
  title: string;
  text: string;
  link: {
    text: string;
    address: string;
  };
  cta: {
    agree: string;
    disagree: string;
  };
}

const CookieNotice: React.FC<ICookieNoticeProps> = ({ title, text, link, cta }) => {
  let timeout;
  const [isVisible, setVisibility] = React.useState(false);

  React.useEffect(() => {
    const allowCookies = get(CookiesKeys.allowCookies);
    if (typeof allowCookies === 'undefined') {
      timeout = setTimeout(() => {
        setVisibility(true);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const setCookie = (value: boolean) => {
    set(CookiesKeys.allowCookies, value);
    setVisibility(false);
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames={{
        enter: styles.cookieNoticeFadeEnter,
        enterActive: styles.cookieNoticeFadeEnterActive,
        exit: styles.cookieNoticeFadeExit,
        exitActive: styles.cookieNoticeFadeExitActive,
      }}
      unmountOnExit={true}
    >
      <div className={styles.cookieNotice}>
        <div className={styles.textWrapper}>
          <Text className={styles.title} type={TextStyles.cookieTitle} color={ColorStyles.primary} element="p">
            {title}
          </Text>
          <Text className={styles.text} type={TextStyles.cookieBody} color={ColorStyles.tertiary} element="p">
            {text}{' '}
            <a href={link.address} target="_blank">
              {link.text}
            </a>
            .
          </Text>
        </div>
        <div className={styles.ctaWrapper}>
          <PrimaryBtn size="medium" onClick={() => setCookie(false)}>
            {cta.disagree}
          </PrimaryBtn>
          <SecondaryBtn size="medium" onClick={() => setCookie(true)}>
            {cta.agree}
          </SecondaryBtn>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CookieNotice;
