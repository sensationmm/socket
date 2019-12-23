import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { ButtonTypes, Outline, Primary, Round, Secondary, Tertiary } from './index';

const buttonKnobs = () => ({
  children: text('children', 'Register'),
  isFullWidth: boolean('isFullWidth', false),
  isLoading: boolean('isLoading', false),
  size: select('size', ['mini', 'medium', 'regular'], 'regular'),
});

const linkKnobs = () => ({
  children: text('children', 'Go'),
  isFullWidth: boolean('isFullWidth', false),
  size: select('size', ['mini', 'medium', 'regular'], 'regular'),
});

const roundButtonKnobs = () => ({
  children: text('children', 'i'),
  isLoading: boolean('isLoading', false),
  isSelected: boolean('selected', false),
});

storiesOf('Components|button', module)
  .add('PrimaryButton', () => <Primary {...buttonKnobs()} />)
  .add('PrimaryButton disabled', () => <Primary {...buttonKnobs()} disabled={true} />)
  .add('PrimaryInternalLink', () => <Primary {...linkKnobs()} type={ButtonTypes.internalLink} link="/" />)
  .add('PrimaryExternalLink', () => (
    <Primary {...linkKnobs()} type={ButtonTypes.externalLink} link="http://google.com" />
  ))
  .add('SecondaryButton', () => <Secondary {...buttonKnobs()} />)
  .add('SecondaryButton disabled', () => <Secondary {...buttonKnobs()} disabled={true} />)
  .add('SecondaryInternalLink', () => <Secondary {...linkKnobs()} type={ButtonTypes.internalLink} link="/" />)
  .add('SecondaryExternalLink', () => (
    <Secondary {...linkKnobs()} type={ButtonTypes.externalLink} link="http://google.com" />
  ))
  .add('TertiaryButton', () => <Tertiary {...buttonKnobs()} />)
  .add('TertiaryButton disabled', () => <Tertiary {...buttonKnobs()} disabled={true} />)
  .add('TertiaryInternalLink', () => <Tertiary {...linkKnobs()} type={ButtonTypes.internalLink} link="/" />)
  .add('TertiaryExternalLink', () => (
    <Tertiary {...linkKnobs()} type={ButtonTypes.externalLink} link="http://google.com" />
  ))
  .add('OutlineButton', () => <Outline {...buttonKnobs()} />)
  .add('OutlineButton disabled', () => <Outline {...buttonKnobs()} disabled={true} />)
  .add('OutlineInternalLink', () => <Outline {...linkKnobs()} type={ButtonTypes.internalLink} link="/" />)
  .add('OutlineExternalLink', () => (
    <Outline {...linkKnobs()} type={ButtonTypes.externalLink} link="http://google.com" />
  ))
  .add('RoundButton', () => <Round {...roundButtonKnobs()} />)
  .add('RoundButton disabled', () => <Round {...roundButtonKnobs()} disabled={true} />)
  .add('RoundInternalLink', () => <Round {...linkKnobs()} type={ButtonTypes.internalLink} link="/" />)
  .add('RoundExternalLink', () => <Round {...linkKnobs()} type={ButtonTypes.externalLink} link="http://google.com" />);
