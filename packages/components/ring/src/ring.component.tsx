import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import * as baseStyles from './ring.module.css';

const Ring: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={classNames(baseStyles.base, className)} {...props}>
    {children}
  </div>
);

export default Ring;
