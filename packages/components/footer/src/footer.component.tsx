import * as React from 'react';

import { Round as RoundButton } from '@somo/pda-components-button/src';

// @ts-ignore
import * as styles from './footer.module.css';

export interface IMenu {
  label: string;
  link: string;
}

export interface IFooterProps {
  menu?: IMenu[];
}

const Footer: React.FC<IFooterProps> = ({ menu }) => (
  <div className={styles.component}>
    <div className={styles.social}>
      <RoundButton>F</RoundButton>
      <RoundButton>T</RoundButton>
      <RoundButton>I</RoundButton>
    </div>

    <div className={styles.copyright}>2019 &copy; Socket Energy. All rights reserved.</div>

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

export default Footer;
