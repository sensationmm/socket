import * as React from 'react';

import { Round as RoundButton } from '@somo/pda-components-button/src';
import Text, { TextStyles, ColorStyles } from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './footer.module.css';

export interface IMenu {
  label: string;
  link: string;
}

export interface IFooterProps {
  i18n: EON.IWebAppTranslations['homepage']['footer'];
  menu?: IMenu[];
}

const Footer: React.FC<IFooterProps> = ({ i18n, menu }) => {
  const { title, subTitle, copyright } = i18n;

  return (
    <div className={styles.component}>
      <Text element="h3" type={TextStyles.h2} color={ColorStyles.secondary}>
        {title}
      </Text>
      <Text element="p" type={TextStyles.segmentCopy} color={ColorStyles.secondary}>
        {subTitle}
      </Text>
      <div className={styles.social}>
        <RoundButton>F</RoundButton>
        <RoundButton>T</RoundButton>
        <RoundButton>I</RoundButton>
      </div>

      <div>{copyright}</div>

      {menu && (
        <div className={styles.nav}>
          <ul>
            {menu.map(({ label, link }, count) => {
              return (
                <li key={`footer-menu-${count}`}>
                  <a href={link}>{label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
