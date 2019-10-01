import classNames from 'classnames';
import * as React from 'react';
import { HTMLAttributes } from 'react';
// @ts-ignore
import * as baseStyles from './ring.module.css';

export const Ring: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={classNames(baseStyles.base, className)} {...props}>
    {children}
  </div>
);
