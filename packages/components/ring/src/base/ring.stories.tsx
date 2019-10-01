import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';
import { Ring } from './ring.component';

const knobs = () => ({
  children: text('children', '1'),
});

storiesOf('Components|ring', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Ring {...knobs()} />);
