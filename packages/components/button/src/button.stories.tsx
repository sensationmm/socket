import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Outline, Primary, Round, Secondary, Tertiary } from './index';

const buttonKnobs = () => ({
  children: text('children', 'Register'),
  isFullWidth: boolean('isFullWidth', false),
  isLoading: boolean('isLoading', false),
  size: select('size', ['mini', 'medium', 'regular'], 'regular'),
});

const roundButtonKnobs = () => ({
  children: text('children', 'i'),
  isLoading: boolean('isLoading', false),
  isSelected: boolean('selected', false),
});

storiesOf('Components|button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => <Primary {...buttonKnobs()} />)
  .add('Primary disabled', () => <Primary {...buttonKnobs()} disabled={true} />)
  .add('Secondary', () => <Secondary {...buttonKnobs()} />)
  .add('Secondary disabled', () => <Secondary {...buttonKnobs()} disabled={true} />)
  .add('Tertiary', () => <Tertiary {...buttonKnobs()} />)
  .add('Tertiary disabled', () => <Tertiary {...buttonKnobs()} disabled={true} />)
  .add('Outline', () => <Outline {...buttonKnobs()} />)
  .add('Outline disabled', () => <Outline {...buttonKnobs()} disabled={true} />)
  .add('Round', () => <Round {...roundButtonKnobs()} />)
  .add('Round disabled', () => <Round {...roundButtonKnobs()} disabled={true} />);
