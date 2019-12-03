import { fireEvent, render, wait } from '@testing-library/react';
import * as React from 'react';

import NavChildWrapper, { ChildPosition } from '.';

const defaultProps = {
  position: ChildPosition.Center,
  label: 'First level',
};

const renderComponent = (props?) =>
  render(
    <NavChildWrapper {...defaultProps} {...props}>
      <div>Second Level</div>
    </NavChildWrapper>,
  );

describe('@somo/pda-components-nav-child-wrapper component', () => {
  it('should render', () => {
    renderComponent();
  });

  it('should show container', async () => {
    const { queryByText, getByText } = renderComponent();
    const firstLevelNav = getByText(defaultProps.label);

    expect(queryByText('Second level')).toBe(null);
    fireEvent.click(firstLevelNav);
    await wait(() => {
      getByText('Second Level');
    });
  });
});
