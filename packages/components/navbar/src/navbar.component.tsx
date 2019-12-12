import cx from 'classnames';
import * as React from 'react';

import { Logo } from '@somo/pda-components-icons/src';
import Menu, { IMenuProps } from '@somo/pda-components-menu/src';
import SVG from '@somo/pda-components-svg/src';

import * as styles from './navbar.module.css';

interface INavbarProps {
  menu?: IMenuProps['links'];
}

const Navbar: React.FC<INavbarProps> = ({ menu }) => {
  const [isMenuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.bodyOverflowHidden);
    } else {
      document.body.classList.remove(styles.bodyOverflowHidden);
    }
  }, [isMenuOpen]);

  return (
    <div className={styles.navbar}>
      <a className={styles.logo} href="/">
        <SVG children={Logo} />
      </a>

      {menu && (
        <>
          <div className={styles.desktopMenu}>
            <Menu links={menu} />
          </div>
          <div
            className={cx(styles.mobileMenu, {
              [styles.open]: isMenuOpen,
            })}
          >
            <Menu links={menu} />
          </div>
        </>
      )}

      <div
        role="button"
        aria-label="Open Menu"
        className={cx(styles.mobileMenuTriggerBtn, {
          [styles.mobileMenuTriggerBtnOpen]: isMenuOpen,
        })}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <span className={styles.mobileMenuTriggerBtnLine} />
      </div>
    </div>
  );
};

export default Navbar;
