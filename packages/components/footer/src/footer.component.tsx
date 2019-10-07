import * as React from 'react';

import { Round as RoundButton } from '@somo/pda-components-button/src';
import Menu, { IMenuProps } from '@somo/pda-components-menu/src';

// @ts-ignore
import * as styles from './footer.module.css';

export interface IFooterProps {
  menu?: IMenuProps['links'];
}

const Footer: React.FC<IFooterProps> = ({ menu }) => (
  <div className={styles.component}>
    <div className={styles.social}>
      <RoundButton>F</RoundButton>
      <RoundButton>T</RoundButton>
      <RoundButton>I</RoundButton>
    </div>

    <div className={styles.copyright}>2019 &copy; Socket Energy. All rights reserved.</div>

    {menu && <Menu links={menu} />}
  </div>
);

export default Footer;
