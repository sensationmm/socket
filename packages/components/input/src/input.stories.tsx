import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

const inputTypes = {
  Text: 'text',
  Password: 'password',
  Email: 'email',
};

storiesOf('Components|input', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Component
      type={select('type', inputTypes, 'text')}
      name={text('name', 'name')}
      isFullWidth={boolean('isFullWidth', false)}
      placeholder={text('placeholder', 'Enter Reg')}
      value={text('value', 'X1')}
    />
  ));
