import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Form Elements|Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      id={'input-text'}
      label={text('label', 'Some field')}
      checked={boolean('checked', false)}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      handleChange={action('handleChange()')}
    />
  ));
