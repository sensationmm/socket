import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render as rtlRender } from '@testing-library/react';
import React from 'react';

import { INotificationProps } from '.';
import Notification from './notification.component';

describe('@somo/pda-components-notification', () => {
  const render = (props?: INotificationProps) => rtlRender(<Notification {...defaultProps} {...props} />);

  const defaultProps: INotificationProps = {
    title: 'title',
    message: 'message',
    cta: 'Dismiss',
    onClick: jest.fn(),
  };

  it('should render without error', () => {
    render();
  });

  it('should render props passed to it', () => {
    const { getByText } = render();
    getByText(defaultProps.title);
    getByText(defaultProps.message);
    getByText(defaultProps.cta);
  });

  it('should fire the onClick when the CTA is clicked', () => {
    const { getByText } = render();
    const cta = getByText(defaultProps.cta);
    fireEvent.click(cta);
    expect(defaultProps.onClick).toBeCalled();
  });
});
