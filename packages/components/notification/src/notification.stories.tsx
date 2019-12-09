import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Notification from './notification.component';

storiesOf('Components|notification', module).add('Default', () => (
  <Notification
    title={text('Title', 'Error - 429 Too many requests')}
    message={text('Message', 'Too many requests, try again soon')}
    cta={text('CTA', 'Close')}
    onClick={action('onClick')}
  />
));
