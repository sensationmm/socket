import * as React from 'react';

import * as styles from './child-menu.module.css';

export interface IMenuItem {
  label: string;
  link?: string;
}

export interface IMenuProps {
  links: IMenuItem[];
}

const ChildMenu: React.FC<IMenuProps> = ({ links }) => {
  return (
    <ul className={styles.childNav} role="menu">
      {links &&
        links.map(({ label, link }, count) => {
          return (
            <li key={`child-menu-${count}`} role="menuitem" className={styles.childNavListItem}>
              <a href={link} className={styles.navLink}>
                {label}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default ChildMenu;
