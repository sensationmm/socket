import * as React from 'react';

import Menu, { IMenuProps } from '@somo/pda-components-menu/src';

// @ts-ignore
import * as styles from './navbar.module.css';
import Logo from '../assets/socket-logo.svg';

interface INavbarProps {
  menu?: IMenuProps['links'];
}

const Navbar: React.FC<INavbarProps> = ({ menu }) => {
  return (
    <div className={styles.component}>
      <div className={styles.logo}><img src={Logo} /></div>

      {menu && <Menu links={menu} />}
    </div>
  );
};

export default Navbar;
