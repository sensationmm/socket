import classNames from 'classnames';
import React from 'react';

import * as baseStyles from './ring.module.css';

export enum RingStyles {
  Default,
  Primary,
}

interface IRingProps {
  style?: RingStyles;
  className?: string;
}

const Ring: React.FC<IRingProps> = ({ children, className, style, ...props }) => (
  <div
    className={classNames(baseStyles.base, className, { [baseStyles.primary]: style === RingStyles.Primary })}
    {...props}
  >
    {children}
  </div>
);

Ring.defaultProps = {
  style: RingStyles.Default,
};

export default Ring;
