import cx from 'classnames';
import * as React from 'react';

import { Secondary as Button } from '@somo/pda-components-button/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import styles from './notification.module.css';

export interface INotificationProps {
  title: string;
  message: string;
  cta: string;
  className?: string;
  onClick: () => void;
}

const Notification: React.FC<INotificationProps> = ({ title, message, cta, className, onClick }) => (
  <div className={cx(styles.notification, className)}>
    <div>
      <div className={styles.title}>
        <Text type={TextStyles.h3}>{title}</Text>
      </div>

      <div className={styles.message}>
        <Text type={TextStyles.segmentCopy} color={ColorStyles.secondary}>
          {message}
        </Text>
      </div>
    </div>
    <div className={styles.cta}>
      <Button onClick={onClick} size="medium">
        {cta}
      </Button>
    </div>
  </div>
);

export default Notification;
