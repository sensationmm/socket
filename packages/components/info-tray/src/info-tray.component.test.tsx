import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Transition } from 'react-transition-group';

import InfoTray from './info-tray.component';
import { IInfoTrayProps } from './info-tray.component';

jest.mock('react-transition-group', () => ({ Transition: jest.fn((cmp) => cmp.children()) }));

describe('InfoTray', () => {
  const renderComponent = (props: IInfoTrayProps) => render(<InfoTray {...props}>{props.children}</InfoTray>);

  const defaultProps = {
    open: false,
    openedText: 'CLOSE',
    closedText: 'OPEN',
    children: 'content',
  };

  it('hides content when isOpen prop is false', () => {
    const { getByText } = renderComponent({ ...defaultProps });
    const context = expect.any(Object);
    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: false }), context);
    getByText(/OPEN/i);
  });

  it('sets the in prop when the button is clicked', () => {
    const { getByText } = renderComponent({ ...defaultProps, open: false });
    const context = expect.any(Object);

    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: false }), context);

    fireEvent.click(getByText(/OPEN/i));
    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: true }), context);
    getByText(/CLOSE/i);
  });
});
