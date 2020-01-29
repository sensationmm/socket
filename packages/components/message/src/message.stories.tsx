import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Components|message', module)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000000', default: true }],
  })
  .add('Default', () => <Component text={text('text', 'Warning message goes here')} emoji={text('emoji', '')} />);
