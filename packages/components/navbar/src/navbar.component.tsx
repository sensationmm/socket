import cx from 'classnames';
import { navigate } from 'gatsby';
import * as React from 'react';

import { BurgerMenu, Logo } from '@somo/pda-components-icons/src';
import Menu, { IMenuProps } from '@somo/pda-components-menu/src';
import SVG from '@somo/pda-components-svg/src';

import * as styles from './navbar.module.css';

interface INavbarProps {
  menu?: IMenuProps['links'];
}

const Navbar: React.FC<INavbarProps> = ({ menu }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.bodyOverflowHidden);
    } else {
      document.body.classList.remove(styles.bodyOverflowHidden);
    }
  }, [menuOpen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <SVG children={Logo} />
      </div>

      {menu && (
        <div className={cx(styles.headerMenu, { [styles.mobileOpen]: menuOpen })}>
          <Menu links={menu} />
        </div>
      )}

      <div role="button" className={styles.mobileMenu} onClick={() => setMenuOpen(!menuOpen)}>
        <SVG children={BurgerMenu} />
      </div>
    </div>
  );
};

export default Navbar;
