import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { INotification } from '@somo/pda-redux-notification/src/types';
import * as styles from './notification-list.module.css';
import Notification from './notification.component';

export interface INotificationListProps {
  notifications: INotification[];
  clearNotification: (id: string) => void;
}

const NotificationList = ({ notifications, clearNotification }: INotificationListProps) => {
  const [t] = useTranslation();

  return notifications.length > 0 ? (
    <div className={styles.wrapper}>
      <TransitionGroup component={null}>
        {notifications.map(({ id, title, message }) => (
          <CSSTransition timeout={300} classNames={styles} key={id}>
            <Notification
              key={id}
              title={title}
              message={message}
              onClick={() => clearNotification(id)}
              cta={t('site.notification.cta')}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  ) : null;
};

export default NotificationList;
