import * as React from 'react';

import ChildMenu from '@somo/pda-components-child-menu/src';
import NavChildWrapper from '@somo/pda-components-nav-child-wrapper/src';
import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import { IPropsFromReduxState, withSession } from '@somo/pda-pages-login/src';
import { isProduction } from '@somo/pda-utils-environment/src';
import * as styles from './menu.module.css';

export interface IMenuItem {
  children?: IMenuItem[];
  label: string;
  link?: string;
}

export interface IMenuProps extends IPropsFromReduxState {
  links: IMenuItem[];
}

const UnauthorizedNavigation: IMenuItem[] = [
  {
    label: 'Login',
    link: '/login',
  },
  {
    label: 'Register',
    link: '/register',
  },
];

const AuthorizedNavigation: IMenuItem[] = [
  {
    label: 'Log out',
    link: '/logout',
  },
];

export const Menu: React.FC<IMenuProps> = ({ links, isAuthenticated }) => {
  return (
    <SiteMetadataContext.Consumer>
      {(siteMetadata) => (
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
              !isProduction(siteMetadata.siteUrl) &&
              UnauthorizedNavigation.map(({ label, link }, count) => (
                <li key={`unauthorized-link-${count}`} className={styles.topLevelNavItem}>
                  <a href={link} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            {isAuthenticated &&
              !isProduction(siteMetadata.siteUrl) &&
              AuthorizedNavigation.map(({ label, link }, count) => (
                <li key={`authorized-link-${count}`} className={styles.topLevelNavItem}>
                  <a href={link} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </SiteMetadataContext.Consumer>
  );
};

export default withSession(Menu);
