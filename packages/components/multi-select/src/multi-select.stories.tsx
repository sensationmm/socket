import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Mail, Phone, Pigeon, Post, Sms } from '@somo/pda-components-icons/src';
import MultiSelect from '.';
import { IMultiSelectOption } from './multi-select.component';

const options: IMultiSelectOption[] = [
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
  {
    text: 'Post',
    value: 'post',
    selected: false,
    icon: Post,
  },
  {
    text: 'Carrier Pigeon',
    value: 'carrierpigeon',
    selected: false,
    icon: Pigeon,
  },
];

storiesOf('Components|multi-select', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '90vw' }}>{story()}</div>)
  .add('Default', () => <MultiSelect options={options} onChange={action('onChange')} />);
