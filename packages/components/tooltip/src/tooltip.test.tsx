import { fireEvent, render, wait } from '@testing-library/react';
import * as React from 'react';

import Tooltip, { ToolTipPosition } from '.';

const defaultProps = {
  position: ToolTipPosition.Top,
  message: 'message',
};

const renderComponent = (props?) =>
  render(
    <Tooltip {...defaultProps} {...props}>
      <span>tooltip</span>
    </Tooltip>,
  );

describe('@somo/pda-components-tooltip component', () => {
  it('should render', () => {
    renderComponent();
  });

  it('should show and hide the message when hovering in and out of the tooltip', async () => {
    const { queryByText, getByText } = renderComponent();
    const tooltip = getByText('tooltip');

    expect(queryByText('message')).toBe(null);
    fireEvent.mouseOver(tooltip);
    await wait(() => {
      getByText('message');
    });

    fireEvent.mouseLeave(tooltip);
    await wait(() => {
      expect(queryByText('message')).toBe(null);
    });
  });

  it('renders the props passed to it', async () => {
    const { getByText } = renderComponent({ message: 'TEST' });
    const tooltip = getByText('tooltip');

    fireEvent.mouseOver(tooltip);
    await wait(() => {
      getByText('TEST');
    });
  });

  it('delay prop adjusts the hover delay', async () => {
    jest.useFakeTimers();

    const { getByText } = renderComponent({ delay: 10 });
    expect(setTimeout).toHaveBeenCalledTimes(1);

    const tooltip = getByText('tooltip');

    fireEvent.mouseOver(tooltip);

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10);

    fireEvent.mouseLeave(tooltip);

    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10);
  });
});
