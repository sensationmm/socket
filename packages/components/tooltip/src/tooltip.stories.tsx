import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Tooltip, { TooltipOffset, ToolTipPosition } from './index';
import styles from './tooltip.stories.module.css';

storiesOf('Components|tooltip', module)
  .add('default', () => (
    <>
      <div className={styles.section}>
        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Left}
        >
          <button>LEFT</button>
        </Tooltip>

        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Top}
        >
          <button>TOP</button>
        </Tooltip>

        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Bottom}
        >
          <button>BOTTOM</button>
        </Tooltip>

        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Right}
        >
          <button>RIGHT</button>
        </Tooltip>
      </div>

      <div className={styles.section}>
        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Bottom}
          offset={TooltipOffset.Left}
        >
          <button>Offset Left</button>
        </Tooltip>

        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Bottom}
          offset={TooltipOffset.Center}
        >
          <button>Offset Center (default)</button>
        </Tooltip>
        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={ToolTipPosition.Bottom}
          offset={TooltipOffset.Right}
        >
          <button>Offset Right</button>
        </Tooltip>
      </div>
    </>
  ))
  .add('Tooltip placement', () => (
    <>
      <div className={styles.section}>
        <Tooltip
          message={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>}
          position={select(
            'Tooltip position',
            {
              Top: ToolTipPosition.Top,
              Bottom: ToolTipPosition.Bottom,
              Left: ToolTipPosition.Left,
              Right: ToolTipPosition.Right,
            },
            ToolTipPosition.Bottom,
          )}
          offset={select(
            'Arrow offset',
            {
              left: TooltipOffset.Left,
              center: TooltipOffset.Center,
              right: TooltipOffset.Right,
            },
            TooltipOffset.Center,
          )}
        >
          <button>TOOLTIP POSITION</button>
        </Tooltip>
      </div>
    </>
  ));
