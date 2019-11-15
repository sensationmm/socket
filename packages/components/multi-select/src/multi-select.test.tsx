import { fireEvent, render as rtlRender } from '@testing-library/react';
import * as React from 'react';

import { Mail, Phone, Sms } from '@somo/pda-components-icons/src';
import Component from '.';

const render = (props?) => rtlRender(<Component {...props} />);

describe('@somo/pda-components-multi-option-select component', () => {
  const props = {
    onChange: jest.fn(),
    options: [
      {
        text: 'Email',
        value: 'email',
        selected: true,
        icon: Mail,
      },
      {
        text: 'SMS',
        value: 'sms',
        selected: false,
        icon: Sms,
      },
      {
        text: 'Phone',
        value: 'phone',
        selected: false,
        icon: Phone,
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the options passed to it', () => {
    const { getByText } = render(props);
    props.options.forEach((o) => {
      getByText(o.text);
    });
  });

  it('deselects a selected option when clicked', () => {
    const { getByText } = render(props);
    const email = getByText('Email');
    fireEvent.click(email);
    expect(props.onChange).toBeCalledWith([]);
  });

  it('selects a deselected option when clicked', () => {
    const { getByText } = render(props);
    const sms = getByText('SMS');
    fireEvent.click(sms);
    expect(props.onChange).toBeCalledWith([props.options[0], { ...props.options[1], selected: true }]);
  });
});
