import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

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
  .add('Disabled', () => (
    <AccountSection title="Preferences" disabled={true}>
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </AccountSection>
  ));
