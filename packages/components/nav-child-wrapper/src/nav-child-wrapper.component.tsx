import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import { ChevronDownHollow } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';

import * as KEYS from '@somo/pda-utils-keyboard/src';

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
  const parentWrapper = useRef<HTMLDivElement>(null);
  const [isOpen, setChildNav] = useState<boolean>(false);
  const handleClickOutside = (event) => {
    if (parentWrapper.current && !parentWrapper.current.contains(event.target)) {
      setChildNav(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === KEYS.KEY_ESCAPE && isOpen) {
      setChildNav(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navChildClassNames = {
    enter: styles.navChildEnter,
    enterActive: styles.navChildEnterActive,
    exit: styles.navChildExit,
    exitActive: styles.navChildExitActive,
  };

  return (
    <div ref={parentWrapper} className={styles.navChild}>
      <a
        href="#"
        className={styles.navChildLink}
        onClick={(e) => {
          e.preventDefault();
          setChildNav(!isOpen);
        }}
        aria-haspopup="true"
      >
        {label}
        <SVG children={ChevronDownHollow} size={16} className={styles.navChildChevron} />
      </a>

      <CSSTransition appear={true} classNames={navChildClassNames} unmountOnExit={true} timeout={250} in={isOpen}>
        <div className={cx(styles.navChildContent, styles[position])}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default NavChildWrapper;
