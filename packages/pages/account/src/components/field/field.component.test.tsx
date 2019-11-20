import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import Component from './field.component';

describe('AccountField component', () => {
  let props;
  beforeEach(() => {
    props = {
      label: 'Label',
      value: 'Some value',
      editable: false,
      editText: 'Edit',
      onEdit: jest.fn(),
    };
  });

  it('should render the label', async () => {
    const { getByText } = render(<Component {...props} />);
    expect(getByText(props.label)).toBeDefined();
  });

  it('should render the value', async () => {
    const { getByText } = render(<Component {...props} />);
    expect(getByText(props.value)).toBeDefined();
  });

  it('should render a button if editable prop value is truthy', async () => {
    props.editable = true;
    const { getByText, getByTestId } = render(<Component {...props} />);
    expect(getByText(props.editText)).toBeDefined();
    fireEvent.click(getByTestId('edit-btn'));
    expect(props.onEdit).toHaveBeenCalled();
  });
});
