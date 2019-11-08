import { render } from '@testing-library/react';
import React from 'react';
import GutterLayout from './gutter-layout.component';

const renderComponent = (props?) =>
  render(
    <GutterLayout {...props}>
      <div>first</div>
      <div>second</div>
      <div>last</div>
    </GutterLayout>,
  );

describe('GutterLayout component', () => {
  it('renders without error', () => {
    renderComponent();
  });
});
