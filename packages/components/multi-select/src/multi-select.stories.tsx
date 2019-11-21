import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React, { useState } from 'react';

import { Mail, Phone, Pigeon, Post, Sms } from '@somo/pda-components-icons/src';
import MultiSelect from '.';
import { IMultiSelectOption } from './multi-select.component';

const items: IMultiSelectOption[] = [
  {
    label: 'Email',
    value: 'email',
    icon: Mail,
  },
  {
    label: 'SMS',
    value: 'sms',
    icon: Sms,
  },
  {
    label: 'Phone',
    value: 'phone',
    icon: Phone,
  },
  {
    label: 'Post',
    value: 'post',
    icon: Post,
  },
  {
    label: 'Carrier Pigeon',
    value: 'carrierpigeon',
    icon: Pigeon,
  },
];

storiesOf('Form elements|MultiSelect', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '90vw' }}>{story()}</div>)
  .add('Default', () => {
    function Parent({ children }) {
      const [state, setState] = useState();

      return <div>{children(state, setState)}</div>;
    }

    return (
      <Parent>
        {(state, setState) => <MultiSelect value={state} items={items} handleChange={(e) => setState(e)} />}
      </Parent>
    );
  });
