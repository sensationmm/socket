import * as React from 'react';
import Media from 'react-media';
import CSSTransition from 'react-transition-group/CSSTransition';

import { Cross } from '@somo/pda-components-icons/src';
import Portal from '@somo/pda-components-portal/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import tokens from '@somo/pda-utils-tokens/src';

// @ts-ignore
import * as styles from './edit-tray.module.css';

export interface IEditTrayProps {
  component?: React.ReactNode;
  title: string;
  onClose?: () => void;
}

const TIMEOUT = 250;

class EditTray extends React.Component<IEditTrayProps, { mounted: boolean }> {
  public state = { mounted: false };

  public componentDidMount(): void {
    this.setState({ mounted: true });
  }

  public close = () => {
    this.setState({ mounted: false });
  };

  public render() {
    const { children, title, onClose } = this.props;

    const backdropClassNames = {
      enter: styles.backdropEnter,
      enterActive: styles.backdropEnterActive,
      exit: styles.backdropExit,
      exitActive: styles.backdropExitActive,
    };

    const editTrayClassNames = {
      enter: styles.editTrayEnter,
      enterActive: styles.editTrayEnterActive,
      exit: styles.editTrayExit,
      exitActive: styles.editTrayExitActive,
    };

    return (
      <Portal>
        <CSSTransition
          appear={true}
          classNames={backdropClassNames}
          unmountOnExit={true}
          timeout={TIMEOUT}
          in={this.state.mounted}
          onExited={onClose}
        >
          {(state: string) => (
            <div className={styles.backdrop}>
              <CSSTransition
                appear={true}
                classNames={editTrayClassNames}
                unmountOnExit={true}
                timeout={TIMEOUT}
                in={state === 'entered'}
              >
                <div className={styles.editTray}>
                  <div className={styles.editTrayHeading}>
                    <Text element="span" type={TextStyles.h2}>
                      {title}
                    </Text>
                    <span onClick={this.close} className={styles.closeButton}>
                      <Media defaultMatches={true} query={tokens.customMedia.xs}>
                        {(matches) => <SVG children={Cross} size={matches ? 40 : 30} className={styles.close} />}
                      </Media>
                    </span>
                  </div>
                  <div className={styles.editTrayContent}>{children}</div>
                </div>
              </CSSTransition>
            </div>
          )}
        </CSSTransition>
      </Portal>
    );
  }
}

export default EditTray;
