import cx from 'classnames';
import * as React from 'react';

import styles from './tooltip.module.css';

export enum ToolTipPosition {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export enum TooltipOffset {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

interface IBoundResult {
  isInViewport: boolean;
  bounds: IBoundaryExceeded;
}

export interface ITooltip {
  message: any;
  position?: ToolTipPosition;
  offset?: TooltipOffset;
  delay?: number;
  className?: string;
}

interface IBoundaryExceeded {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
}

const Tooltip: React.FC<ITooltip> = ({
  message,
  position = ToolTipPosition.Bottom,
  offset = TooltipOffset.Center,
  delay = 300,
  className,
  children,
}) => {
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const [finalPosition, setFinalPosition] = React.useState<ToolTipPosition>(position);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const positionRef = React.useRef<ToolTipPosition>(position);

  let timeout;

  const showTooltip = (): void => {
    timeout = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = (): void => {
    clearTimeout(timeout);
    setTimeout(() => {
      setVisible(false);
    }, delay);
  };

  React.useEffect(() => {
    const getBounds = (elem: HTMLDivElement): IBoundResult => {
      const bounding = elem.getBoundingClientRect();
      const bounds = {
        top: bounding.top <= 0,
        left: bounding.left <= 0,
        bottom: bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight),
        right: bounding.right >= (window.innerWidth || document.documentElement.clientWidth),
      };
      const isInViewport = !bounds.top && !bounds.left && !bounds.bottom && !bounds.right;

      return {
        isInViewport,
        bounds,
      };
    };

    const switchPosition = (bounds: IBoundaryExceeded): ToolTipPosition => {
      let pos;
      if (bounds.top) {
        pos = ToolTipPosition.Bottom;
      }
      if (bounds.bottom) {
        pos = ToolTipPosition.Top;
      }
      if (bounds.left) {
        pos = ToolTipPosition.Right;
      }
      if (bounds.right) {
        pos = ToolTipPosition.Left;
      }

      return pos;
    };

    if (tooltipRef.current) {
      if (position !== positionRef.current) {
        positionRef.current = position;
        setFinalPosition(position);

        return;
      }
      const { isInViewport, bounds } = getBounds(tooltipRef.current);
      if (!isInViewport) {
        setFinalPosition(switchPosition(bounds));
      }
    }
  }, [isVisible]);

  return (
    <span className={styles.tooltip} onMouseLeave={() => hideTooltip()}>
      {isVisible && (
        <div
          data-testid="bubble"
          ref={tooltipRef}
          className={cx(
            styles['tooltip-bubble'],
            styles[`tooltip-${finalPosition}`],
            styles[`tooltip-offset-${offset}`],
            className,
          )}
        >
          <div className={styles['tooltip-message']}>{message}</div>
        </div>
      )}
      <span className={styles['tooltip-trigger']} onMouseOver={() => showTooltip()}>
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
