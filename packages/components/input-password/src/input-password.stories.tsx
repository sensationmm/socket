import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Form Elements|InputPassword', module)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      id={'input-password'}
      label={text('label', 'Some field')}
      placeholder={text('placeholder', 'Enter password...')}
      value={text('value', '')}
      note={text('note', '')}
      error={text('error', '')}
      handleChange={action('handleChange()')}
      validate={action('validate')}
    />
  ));
