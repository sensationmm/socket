import cx from 'classnames';
import * as React from 'react';
import { Transition } from 'react-transition-group';

import { ChevronDownHollow } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { TextStyles } from '@somo/pda-components-text/src/text.component';
import styles from './info-tray.module.css';

export interface IInfoTrayProps {
  open?: boolean;
  children: any;
  closedText: string;
  openedText: string;
}

const getHeight = (node: HTMLDivElement | null) => (node ? node.scrollHeight : 0);

const InfoTray: React.FC<IInfoTrayProps> = ({ open = false, openedText, closedText, children }) => {
  const [isOpen, setOpen] = React.useState(open);
  const [height, setHeight] = React.useState(open ? null : 2);

  const onEntering = (node: HTMLDivElement) => {
    setHeight(getHeight(node));
  };

  const onEntered = () => {
    setHeight(null);
  };

  const onExit = (node: HTMLDivElement) => {
    setHeight(getHeight(node));
  };

  const onExiting = () => {
    setHeight(2);
  };

  const onExited = () => {
    setHeight(2);
  };

  const containerRef = React.useRef<HTMLDivElement>(null);

  const resizeContainer = () => {
    if (isOpen) {
      setHeight(getHeight(containerRef.current));
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', resizeContainer);

    return () => {
      window.removeEventListener('resize', resizeContainer);
    };
  });

  return (
    <>
      <div className={styles.container}>
        <Transition
          appear={true}
          in={isOpen}
          timeout={300}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
        >
          {(status) => (
            <div
              ref={containerRef}
              className={cx(styles.collapse, styles[status])}
              style={{ height: `${height}px` }}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <div>{children}</div>
            </div>
          )}
        </Transition>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => setOpen(!isOpen)} className={styles.button}>
          <SVG children={ChevronDownHollow} size={'14px'} className={cx(styles.chevron, { [styles.open]: isOpen })} />{' '}
          <Text type={TextStyles.segmentCopyFixed}>{isOpen ? openedText : closedText}</Text>
        </button>
      </div>
    </>
  );
};

export default InfoTray;
