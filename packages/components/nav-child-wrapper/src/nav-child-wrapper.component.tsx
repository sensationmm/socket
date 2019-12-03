import cx from 'classnames';
import * as React from 'react';

import { ChevronDownHollow } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';

import * as styles from './nav-child-wrapper.module.css';

export enum ChildPosition {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export interface INavChildWrapperProps {
  label: string;
  position?: ChildPosition;
}

const NavChildWrapper: React.FC<INavChildWrapperProps> = ({ label, children, position = 'center' }) => {
  const [isOpen, setChildNav] = React.useState<boolean>(false);

  return (
    <div className={styles.navChild}>
      <a href="javascript:void(0);" className={styles.navChildLink} onClick={() => setChildNav(!isOpen)}>
        {label}
        <SVG children={ChevronDownHollow} size={16} className={styles.navChildChevron} />
      </a>
      <div className={cx(styles.navChildContent, styles[position], { [styles.isOpen]: isOpen })}>{children}</div>
    </div>
  );
};

export default NavChildWrapper;
