import * as React from 'react';

import * as styles from './menu.module.css';

export interface IMenuItem {
  label: string;
  link: string;
}

export interface IMenuProps {
  links: IMenuItem[];
}

const Menu: React.FC<IMenuProps> = ({ links }) => {
  return (
    <div className={styles.nav}>
      <ul>
        {links &&
          links.map(({ label, link }, count) => {
            return (
              <li key={`footer-menu-${count}`}>
                <a href={link}>{label}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Menu;
