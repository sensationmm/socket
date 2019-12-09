import { number, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

const tabs = [
  {
    label: 'Electricity',
    emoji: '⚡️',
    content: 'Electricity content goes here',
  },
  {
    label: 'Gas',
    emoji: '🔥',
    content: 'Gas content goes here Gas content goes here Gas content goes here Gas content goes here ',
  },
];

storiesOf('Components|tabs', module)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => <Component fixedHeight={number('fixedHeight', 0)} tabs={object('tabs', tabs)} />);
