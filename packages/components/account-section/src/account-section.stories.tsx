import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Secondary as Button } from '@somo/pda-components-button/src';
import AccountSection from '.';

storiesOf('Components|account-section', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <AccountSection title="Preferences" disabled={false}>
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </AccountSection>
  ))
  .add('with Subtitle', () => (
    <AccountSection title="Preferences" subtitle="Stay in the loop" disabled={false}>
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </AccountSection>
  ))
  .add('with action pane', () => (
    <AccountSection title="Preferences" actionPane={<Button>Edit</Button>}>
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </AccountSection>
  ))
  .add('with Gap', () => (
    <AccountSection title="Preferences" subtitle="Stay in the loop" disabled={false} hasGap={true}>
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </AccountSection>
  ))
  .add('Disabled', () => (
    <AccountSection title="Preferences" disabled={true}>
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </AccountSection>
  ));
