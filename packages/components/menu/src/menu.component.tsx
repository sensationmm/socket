import * as React from 'react';

import ChildMenu from '@somo/pda-components-child-menu/src';
import NavChildWrapper from '@somo/pda-components-nav-child-wrapper/src';

import { IPropsFromReduxActions, IPropsFromReduxState, withSession } from '@somo/pda-pages-login/src';
import { showInDevOnly } from '@somo/pda-utils-show-in-dev-only/src';

import * as styles from './menu.module.css';

export interface IMenuItem {
  children?: IMenuItem[];
  label: string;
  link?: string;
}

export interface IMenuProps extends IPropsFromReduxState, IPropsFromReduxActions {
  links: IMenuItem[];
}

const UnauthorizedNavigation = [
  {
    label: 'Login',
    link: '/login',
  },
  {
    label: 'Register',
    link: '/register',
  },
];

const AuthorizedNavigation = [
  {
    label: 'Log out',
    link: '/logout',
  },
];

export const Menu: React.FC<IMenuProps> = ({ links, isAuthenticated }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.topLevelNav}>
        {links &&
          links.map(({ label, link, children }, count) => (
            <li key={`menu-${count}`} className={styles.topLevelNavItem}>
              {children ? (
                <NavChildWrapper label={label}>
                  <ChildMenu links={children} />
                </NavChildWrapper>
              ) : (
                <a href={link} className={styles.navLink}>
                  {label}
                </a>
              )}
            </li>
          ))}
        {!isAuthenticated &&
          showInDevOnly() &&
          UnauthorizedNavigation.map(({ label, link }, count) => (
            <li key={`unauthorized-link-${count}`} className={styles.topLevelNavItem}>
              <a href={link} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
        {isAuthenticated &&
          showInDevOnly() &&
          AuthorizedNavigation.map(({ label, link }, count) => (
            <li key={`authorized-link-${count}`} className={styles.topLevelNavItem}>
              <a href={link} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default withSession(Menu);
