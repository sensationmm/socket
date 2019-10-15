import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './';

const content = [
  'Set goals for how much you spend',
  'Regular tips from our boffins to help you save',
  'Easily check and compare your history',
  'See forecasts based on what you use',
];

storiesOf('Components|list', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Component listContent={object('listContent', content)} />);
