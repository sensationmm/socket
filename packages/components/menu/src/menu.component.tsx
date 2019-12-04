import * as React from 'react';

import ChildMenu from '@somo/pda-components-child-menu/src';
import NavChildWrapper from '@somo/pda-components-nav-child-wrapper/src';

import * as styles from './menu.module.css';

export interface IMenuItem {
  children?: IMenuItem[];
  label: string;
  link?: string;
}

export interface IMenuProps {
  links: IMenuItem[];
}

const Menu: React.FC<IMenuProps> = ({ links }) => {
  return (
    <div className={styles.nav}>
      <ul className={styles.topLevelNav}>
        {links &&
          links.map(({ label, link, children }, count) => {
            return (
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
            );
          })}
      </ul>
    </div>
  );
};

export default Menu;
