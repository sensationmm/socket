import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Components|save-cancel', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      actionPrimary={action('primary')}
      labelPrimary={text('labelPrimary', '')}
      actionSecondary={action('secondary')}
      labelSecondary={text('labelSecondary', '')}
      primaryDisabled={boolean('primaryDisabled', false)}
    />
  ));
