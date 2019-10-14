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

interface INavbarState {
  menuOpen: boolean;
}

class Navbar extends React.Component<INavbarProps, INavbarState> {
  constructor(props: INavbarProps) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  public render() {
    const { menu } = this.props;
    const { menuOpen } = this.state;

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

        <div className={styles.mobileMenu} onClick={() => this.setState({ menuOpen: !menuOpen })}>
          <SVG children={BurgerMenu} />
        </div>
      </div>
    );
  }
}

export default Navbar;
