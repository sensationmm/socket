import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render as rtlRender } from '@testing-library/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n, { en } from '@somo/pda-utils-i18n/src';
import NotificationList, { INotificationListProps } from './notification-list.component';

describe('@somo/pda-components-notification', () => {
  const defaultProps: INotificationListProps = {
    notifications: [
      { id: '1', title: 'title1', message: 'message1', domain: 'domain' },
      { id: '2', title: 'title2', message: 'message2', domain: 'domain' },
    ],
    clearNotification: jest.fn(),
  };

  const render = (props?: INotificationListProps) =>
    rtlRender(
      <I18nextProvider i18n={i18n}>
        <NotificationList {...defaultProps} {...props} />
      </I18nextProvider>,
    );

  it('should render without error', () => {
    render();
  });

  it('should render notifications passed to it', () => {
    const { getByText } = render();
    getByText(defaultProps.notifications[0].title);
    getByText(defaultProps.notifications[0].message);
    getByText(defaultProps.notifications[1].title);
    getByText(defaultProps.notifications[1].message);
  });

  it('should fire the clearNotification with the notification Id when the CTA is clicked', () => {
    const { queryAllByText } = render();
    const cta = queryAllByText(en.site.notification.cta);
    expect(cta.length).toBe(2);
    fireEvent.click(cta[0]);
    expect(defaultProps.clearNotification).toBeCalledWith('1');
  });
});
