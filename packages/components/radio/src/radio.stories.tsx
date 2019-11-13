import { action } from '@storybook/addon-actions';
import { object, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component, { RadioType } from '.';

const types = {
  Button: RadioType.Button,
};

const items = [
  {
    label: 'no',
    value: 'no',
  },
  {
    label: 'yes',
    value: 'yes',
  },
];

storiesOf('Form Elements|Radio', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Component
      type={select('type', types, RadioType.Button)}
      groupLabel={text('groupLabel', 'is this a question?')}
      selectedValue={text('selectedValue', 'no')}
      items={object('items', items)}
      name={'radioGroup'}
      handleChange={action('handleChange')}
      hidden={false}
    />
  ));
