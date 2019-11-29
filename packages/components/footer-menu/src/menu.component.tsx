import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './menu.module.css';

export interface IMenuItem {
  label: string;
  link: string;
}

export interface IMenuProps {
  links: IMenuItem[];
}

const FooterMenu: React.FC<IMenuProps> = ({ links }) => {
  return (
    <div className={styles.nav}>
      <ul>
        {links &&
          links.map(({ label, link }, count) => {
            return (
              <li key={`menu-item-${count}`}>
                <a href={link}>
                  <Text type={TextStyles.segmentCopy} color={ColorStyles.secondary}>
                    {label}
                  </Text>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FooterMenu;
