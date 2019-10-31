import cx from 'classnames';
import { VerticalAlignProperty } from 'csstype';
import * as React from 'react';

import * as baseStyles from './svg.module.css';

interface ISVGStyle {
  svg?: string;
}

export interface ISVGProps {
  /**
   * CSS value (i.e. '10px')
   */
  width?: string | number;
  height?: string | number;

  /**
   * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
   */
  preserveAspectRatio?: string;
  className?: string;
  size?: string | number;
  fill?: string | number;
  stroke?: string;
  verticalAlign?: VerticalAlignProperty<any>;
  styles?: ISVGStyle;
}

const SVG: React.FC<ISVGProps> = ({
  className,
  fill,
  stroke = 'none',
  size,
  width,
  height,
  children,
  preserveAspectRatio,
  verticalAlign,
  styles,
}) => {
  const finalHeight = size || height;
  const finalWidth = size || width;
  const Icon = children as any;

  return (
    <div
      className={cx(baseStyles.container, [className, styles && styles.svg])}
      style={{ height: finalHeight, width: finalWidth }}
      role="presentation"
    >
      <Icon
        preserveAspectRatio={preserveAspectRatio}
        height={finalHeight}
        width={finalWidth}
        fill={fill}
        style={{
          display: 'flex',
          margin: 'auto',
          width: finalWidth,
          height: finalHeight,
          fill,
          stroke,
          verticalAlign,
        }}
      />
    </div>
  );
};

SVG.defaultProps = {
  size: undefined,
  width: '100%',
  height: '100%',
  className: '',
  preserveAspectRatio: 'xMidYMid',
  fill: 'currentColor',
  verticalAlign: 'middle',
  styles: {},
};

export default SVG;
