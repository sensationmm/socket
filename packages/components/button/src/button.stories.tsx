import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Outline, Primary, Tertiary } from './index';

const buttonKnobs = () => ({
  children: text('children', 'Register'),
  isFullWidth: boolean('isFullWidth', false),
  isLoading: boolean('isLoading', false),
  size: select('size', ['mini', 'regular', 'large'], 'regular'),
});

storiesOf('Components|button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => <Primary {...buttonKnobs()} />)
  .add('Primary disabled', () => <Primary {...buttonKnobs()} disabled={true} />)
  .add('Outline', () => <Outline {...buttonKnobs()} />)
  .add('Outline disabled', () => <Outline {...buttonKnobs()} disabled={true} />)
  .add('Tertiary', () => <Tertiary {...buttonKnobs()} />)
  .add('Tertiary disabled', () => <Tertiary {...buttonKnobs()} disabled={true} />);
