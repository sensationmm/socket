import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Form Elements|InputText', module)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      id={'input-text'}
      label={text('label', 'Some field')}
      placeholder={text('placeholder', 'Enter value...')}
      value={text('value', '')}
      readOnly={boolean('readOnly', false)}
      note={text('note', '')}
      error={text('error', '')}
      hidden={boolean('hidden', false)}
      handleChange={action('handleChange()')}
      handleKeyPress={action('handleKeyPress()')}
      handleFocus={action('handleFocus()')}
      validate={action('validate')}
    />
  ));
